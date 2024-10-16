import React, { useEffect, useState } from "react";
import {
    Stack,
    Typography,
    TextField,
    InputAdornment,
    Alert,
    IconButton,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate, useLocation } from "react-router-dom";
import { db, collection, getDocs } from "../firebaseConfig";

function App() {
    const location = useLocation();
    const { state } = location;
    const characterCreated = state?.createdCharacter;
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const charactersCollection = collection(db, "characters");
            const charactersSnapshot = await getDocs(charactersCollection);
            const charactersList = charactersSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setCharacters(charactersList);
        };

        fetchCharacters();
    }, []);

    useEffect(() => {
        if (characterCreated) {
            setShowAlert(true);
            const timer = setTimeout(() => {
                setShowAlert(false);
                navigate(location.pathname);
            }, 5000);

            return () => clearTimeout(timer);
        } else {
            setShowAlert(false);
        }
    }, [characterCreated]);

    return (
        <Stack
            height="100vh"
            sx={{
                background: (theme) => theme.palette.background.default,
                margin: 0,
                color: "#fff",
            }}
        >
            {showAlert && (
                <Alert severity="success" onClose={() => setShowAlert(false)}>
                    Personagem adicionado com sucesso!
                </Alert>
            )}

            <Stack
                width="100%"
                height="100px"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                padding="15px"
                boxSizing="border-box"
                sx={{ background: (theme) => theme.palette.primary.main }}
            >
                <Typography variant="h2" fontSize={{ xs: "24px", sm: "36px" }}>
                    CONVERSAR
                </Typography>
                {/* <TextField
                    placeholder="Pesquisar"
                    size="small"
                    variant="outlined"
                    sx={{
                        "& .MuiInputBase-root": {
                            color: "white",
                        },
                        "& .MuiInputLabel-root": {
                            color: "white",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            color: "white",
                        },
                        maxWidth: "200px", // Limitar largura
                        width: "100%",
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                /> */}
            </Stack>

            <Stack
                direction="row"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="center"
                sx={{
                    overflowY: "auto",
                    padding: { xs: "20px", sm: "40px" },
                    gap: "20px", // Espaço entre cards
                }}
            >
                {characters.map((character) => (
                    <Card
                        key={character.id}
                        onClick={() => navigate(`/chat/${character.id}`)}
                        sx={{
                            width: { xs: "150px", sm: "200px" }, // Tamanho responsivo dos cards
                            maxHeight: 210,
                            backgroundColor: "#222",
                            color: "#fff",
                            cursor: "pointer",
                            "&:hover": {
                                backgroundColor: "#333",
                                "& .MuiTypography-root": {
                                    color: (theme) =>
                                        theme.palette.secondary.main,
                                },
                                "& .MuiAvatar-root": {
                                    transform: "scale(1.1)",
                                    transition: "transform 0.3s",
                                },
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            alt={character.name}
                            height="140"
                            image={character.avatar} // A URL do avatar deve ser pública
                        />
                        <CardContent>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    textAlign: "center",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    fontSize: { xs: "14px", sm: "16px" }, // Tamanho responsivo do texto
                                }}
                            >
                                {character.name}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>

            <IconButton
                aria-label="create"
                size="large"
                sx={{
                    position: "fixed",
                    bottom: 15,
                    right: 15,
                    background: (theme) => theme.palette.secondary.main,
                    width: "60px", // Dimensão responsiva
                    height: "60px",
                }}
                onClick={() => navigate("/create")}
            >
                <AddIcon fontSize="inherit" />
            </IconButton>
        </Stack>
    );
}

export default App;
