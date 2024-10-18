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
                        navigate("FicSpeak/"+location.pathname);
                    }, 5000);

                    return () => clearTimeout(timer);
                } else {
                    setShowAlert(false);
                }
            }, [characterCreated]);
            console.log(characters.length);
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
                        padding={{ xs: "10px", sm: "15px" }} // Responsive padding
                        boxSizing="border-box"
                        sx={{ background: (theme) => theme.palette.primary.main }}
                    >
                        <Typography variant="h2" fontSize={{ xs: "24px", sm: "36px" }}>
                            CONVERSAR
                        </Typography>

                        {/* Uncomment if you want to add a search bar */}
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
                            padding: "10px",
                            gap:"10px", // Espaço entre cards
                        }}
                    >
                        {characters.map((character) => (
                            <Card
                                key={character.id}
                                onClick={() => navigate(`/FicSpeak/chat/${character.id}`)}
                                sx={{
                                    width: "150px", // Largura responsiva
                                    maxHeight: 240, // Altura máxima do card
                                    backgroundColor: "#222",
                                    color: "#fff",
                                    cursor: "pointer",
                                    "&:hover": {
                                        backgroundColor: "#333",
                                        "& .MuiTypography-root": {
                                            color: (theme) => theme.palette.secondary.main,
                                        },
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    alt={character.name}
                                    height="160" // Altura da imagem
                                    image={character.avatar}
                                    sx={{
                                        objectFit: "cover",
                                        objectPosition: "center",
                                    }}
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
                                            fontSize: { xs: "15px", sm: "17px" }, // Tamanho de texto ajustado
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
                            backgroundColor: (theme) => theme.palette.secondary.main,
                            width: { xs: '50px', sm: '60px' }, // Dimensão responsiva
                            height: { xs: '50px', sm: '60px' },
                        }}
                        onClick={() => navigate("/FicSpeak/create")}
                    >
                        <AddIcon fontSize="inherit" />
                    </IconButton>
                </Stack>
            );
        }

        export default App;