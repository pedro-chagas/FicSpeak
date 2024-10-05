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
import LlamaAI from "llamaai";

const apiToken =
    "LA-52cf1258c0364a03a5afc48a5ff4e38f02572f0d9a2249d2aed353467ed2de05";
const llamaAPI = new LlamaAI(apiToken);

const apiRequestJson = {
    messages: [
        { role: "user", content: "What is the weather like in Boston?" },
    ],
    functions: [
        {
            name: "get_current_weather",
            description: "Get the current weather in a given location",
            parameters: {
                type: "object",
                properties: {
                    location: {
                        type: "string",
                        description:
                            "The city and state, e.g. San Francisco, CA",
                    },
                    days: {
                        type: "number",
                        description:
                            "for how many days ahead you wants the forecast",
                    },
                    unit: { type: "string", enum: ["celsius", "fahrenheit"] },
                },
            },
            required: ["location", "days"],
        },
    ],
    stream: false,
    function_call: "get_current_weather",
};

llamaAPI
    .run(apiRequestJson)
    .then((response) => {
        // Process response
    })
    .catch((error) => {
        // Handle errors
    });

function App() {
    const location = useLocation();
    const { state } = location;
    const characterCreated = state?.createdCharacter;
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (characterCreated) {
            setShowAlert(true);
            const timer = setTimeout(() => {
                setShowAlert(false);
                navigate(location.pathname);
                console.log(state);
            }, 5000);

            return () => clearTimeout(timer);
        } else {
            setShowAlert(false);
        }
    }, [characterCreated]);

    const characters = [
        {
            id: 1,
            name: "Homem Aranha",
            avatar: "https://pm1.aminoapps.com/6904/921b010f4c67c7ba46d2e31f97973570eb0d34f0r1-512-512v2_00.jpg",
        },
        {
            id: 1,
            name: "Harry Potter",
            avatar: "https://s2-g1.glbimg.com/R9MLvKO92PP_78wMTCvDKozTh8A=/0x0:1518x916/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/7/L/AhD3O2Rguo4YQNpBTkEQ/grifi.jpg",
        },
        {
            id: 1,
            name: "Dipper",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBakyW_9BtqvXNm1zdyyq6tPHUgH4nBT_lIA&s",
        },
        {
            id: 2,
            name: "Batman",
            avatar: "https://image.api.playstation.com/vulcan/img/rnd/202010/2621/H9v5o8vP6RKkQtR77LIGrGDE.png",
        },
        {
            id: 2,
            name: "Gilfoyle",
            avatar: "https://static.hbo.com/content/dam/hbodata/series/silicon-valley/characters/s3/gilfoyle-1920.jpg",
        },
        {
            id: 3,
            name: "Superman",
            avatar: "https://uploads.metroimg.com/wp-content/uploads/2022/10/24135822/Henry-Cavill-como-Superman.jpg",
        },
        {
            id: 4,
            name: "Iron Man",
            avatar: "https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        },
        {
            id: 5,
            name: "Goku",
            avatar: "https://coisasdojapao.com/wp-content/uploads/2023/05/goku-dragon-ball-curiosidades-0.webp",
        },
        {
            id: 29,
            name: "Shrek",
            avatar: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/10/shrek-e1696623069422.jpeg?w=905",
        },
        {
            id: 30,
            name: "Darth Vader",
            avatar: "https://i.pinimg.com/originals/73/47/92/734792dccf8d2207c243a0e981cbcf54.png",
        },
        {
            id: 30,
            name: "Bill Cipher",
            avatar: "https://pm1.aminoapps.com/6726/5d37f852736aed42b14cf263251a64581e8ede69v2_00.jpg",
        },
        {
            id: 30,
            name: "Naruto",
            avatar: "https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2022/03/04/6F3E2E33-8AAF-4607-8B3E-80261F00FB86/naruto_104.jpg?crop=1080,1080,x419,y0&width=1200&height=1200&optimize=low&format=webply",
        },
    ];

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
                <Typography variant="h2">CONVERSAR</Typography>
                <TextField
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
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>
            <Stack
                direction="row"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="center"
                sx={{
                    overflowY: "auto",
                    padding: "40px",
                }}
            >
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        overflowY: "auto",
                        padding: "10px",
                    }}
                    gap="40px"
                >
                    {characters.map((character) => (
                        <Card
                            key={character.id}
                            sx={{
                                width: 200,
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
                                image={character.avatar}
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
                                    }}
                                >
                                    {character.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
            </Stack>
            <IconButton
                aria-label="create"
                size="large"
                sx={{
                    position: "fixed",
                    bottom: 15,
                    right: 15,
                    background: (theme) => theme.palette.secondary.main,
                    width: "70px",
                    height: "70px",
                }}
                onClick={() => navigate("/create")}
            >
                <AddIcon fontSize="inherit" />
            </IconButton>
        </Stack>
    );
}

export default App;
