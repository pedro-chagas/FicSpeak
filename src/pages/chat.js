import React, { useState, useEffect, useRef } from "react";
import {
    Stack,
    TextField,
    Avatar,
    Typography,
    IconButton,
    ListItem,
    ListItemText,
    CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import BackIcon from "@mui/icons-material/ArrowBack";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";
import { useNavigate, useParams } from "react-router-dom";
import { db, collection, getDocs, doc, getDoc } from "../firebaseConfig";
import GeminiResponse from "../utils/ai";

function App() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [character, setCharacter] = useState(null); 
    const recognitionRef = useRef(null);
    const listRef = useRef(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const characterDoc = await getDoc(doc(db, "characters", id));
                if (characterDoc.exists()) {
                    setCharacter(characterDoc.data());
                    console.log(character);
                } else {
                    console.log("Personagem não encontrado!");
                }
            } catch (error) {
                console.error("Erro ao buscar personagem:", error);
            }
        };

        if (id) {
            fetchCharacter();
        }
    }, [id]);

    useEffect(() => {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.lang = "pt-BR";
            recognitionRef.current.continuous = false;

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setInputValue(transcript);
                setIsRecording(false);
            };

            recognitionRef.current.onerror = (event) => {
                console.error("Erro no reconhecimento de fala:", event.error);
                setIsRecording(false);
            };
        } else {
            console.warn(
                "Navegador não suporta a API de Reconhecimento de Fala."
            );
        }
    }, []);

    const handleSendMessage = (sender) => {
        if (inputValue.trim()) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: inputValue, sender },
            ]);
            setInputValue("");
        }
    };

    const handleRecordAudio = () => {
        if (isRecording) {
            recognitionRef.current.stop();
            setIsRecording(false);
        } else {
            recognitionRef.current.start();
            setIsRecording(true);
        }
    };

    useEffect(() => {
        const respondToUser = async () => {
            if (
                messages.length > 0 &&
                messages[messages.length - 1].sender === "user"
            ) {
                const userMessage = messages[messages.length - 1].text;

                const messageHistory = messages
                    .map(
                        (msg) =>
                            `${msg.sender === "user" ? "Você" : character.name
                            }: ${msg.text}`
                    )
                    .join("\n");

                let aiResponse = "";
                const prompt = `Aqui está o histórico da conversa:\n${messageHistory}\n\nVocê deve fingir que é o ${character.name}. 
                    Deve falar desse jeito: ${character.response}. 
                    Essa é a sua história: ${character.history}. 
                    E essa é a sua personalidade: ${character.personality}. 
                    Converse normalmente como se estivesse tendo uma conversa casual, 
                    sem repetir sua história ou informações já conhecidas. Responda a seguinte mensagem: "${userMessage}" 
                    Sempre responda em português do Brasil.`;

                setIsLoading(true);
                for (let i = 0; i < 5; i++) {
                    aiResponse = await GeminiResponse(prompt);
                    if (aiResponse) break;
                }
                setIsLoading(false);

                if (aiResponse) {
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        { text: aiResponse, sender: "ia" },
                    ]);
                }
            }

            if (listRef.current) {
                listRef.current.scrollTop = listRef.current.scrollHeight;
            }
        };

        respondToUser();
    }, [messages, character]);

    if (!character) {
        return (
            <Stack
                height="100vh"
                alignItems="center"
                justifyContent="center"
                sx={{ backgroundColor: "#333", color: "#fff" }}
            >
                {/* <Typography variant="h6">Personagem não encontrado</Typography> */}
            </Stack>
        );
    }

    return (
        <Stack
            height="100vh"
            sx={{
                backgroundImage: character.wallpaper ? `url(${character.wallpaper})` : "none", 
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                margin: 0,
                color: "#fff",
            }}
        >
            <Stack
                width="100%"
                direction="row"
                alignItems="center"
                padding="15px"
                boxSizing="border-box"
                sx={{ background: (theme) => theme.palette.primary.main,opacity:"90%" }}
            >
                <IconButton
                    aria-label="back"
                    onClick={() => navigate("/FicSpeak")}
                    sx={{ width: "50px", height: "50px" }}
                >
                    <BackIcon />
                </IconButton>
                <Avatar
                    sx={{ width: "70px", height: "70px" }}
                    alt={character.name}
                    src={character.avatar}
                />
                <Typography marginLeft={2} variant="h6">
                    {character.name}
                </Typography>
            </Stack>

            <Stack
                spacing={2}
                sx={{
                    padding: "20px",
                    flexGrow: 1,
                    overflowY: "hidden",
                    height: "100%",
                }}
            >
                <Stack
                    ref={listRef}
                    sx={{
                        flexGrow: 1,
                        overflowY: "auto",
                        padding: "0 10px",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                    }}
                >
                    {messages.map((message, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                padding: "5px 0",
                                width: "fit-content",
                                maxWidth: "300px",
                                margin:
                                    message.sender === "user"
                                        ? "0 0 0 auto"
                                        : "0 auto 0 0",
                            }}
                        >
                            <ListItemText
                                primary={message.text}
                                sx={{
                                    textAlign:
                                        message.sender === "user"
                                            ? "right"
                                            : "left",
                                    color:
                                        message.sender === "user"
                                            ? "#0d47a1"
                                            : "#fff",
                                    backgroundColor:
                                        message.sender === "user"
                                            ? "#e0f7fa"
                                            : "#1976d2",
                                    borderRadius: "8px",
                                    padding: "8px",
                                    wordWrap: "break-word",
                                }}
                            />
                        </ListItem>
                    ))}
                    {isLoading && (
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            sx={{ marginTop: 2 }}
                        >
                            <CircularProgress color="secondary" />
                        </Stack>
                    )}
                </Stack>
            </Stack>

            <Stack direction="row" spacing={1} sx={{ padding: "10px" }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    sx={{
                        background: (theme) => theme.palette.secondary.main,
                        borderRadius: "5px",
                    }}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            handleSendMessage("user");
                        }
                    }}
                    placeholder="Digite sua mensagem..."
                />
                <IconButton
                    aria-label="record"
                    onClick={handleRecordAudio}
                    sx={{
                        background: (theme) => theme.palette.secondary.main,
                        width: "50px",
                    }}
                >
                    {isRecording ? <StopIcon /> : <MicIcon />}
                </IconButton>
                <IconButton
                    aria-label="send"
                    onClick={() => handleSendMessage("user")}
                    sx={{
                        background: (theme) => theme.palette.secondary.main,
                        width: { xs: "40px", md: "50px" },
                    }}
                >
                    <SendIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
}

export default App;
