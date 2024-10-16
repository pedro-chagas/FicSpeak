import React, { useState } from "react";
import { Button, Stack, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../../midia/wallpaper_create_existing.jpg";

function App() {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    function next() {
        navigate("/create/custom/response", { state: { name } });
    }

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100vh"
            position="relative"
            sx={{
                margin: 0,
                color: "#fff",
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Stack
                width="100%"
                height="100%"
                position="absolute"
                sx={{
                    background: "#1f1f1f",
                    opacity: 0.9,
                }}
            ></Stack>

            <Stack
                bgcolor="#fff"
                width={{ xs: "90%", sm: "600px" }} // Largura responsiva
                maxWidth="600px" // Largura máxima
                borderRadius="10px"
                padding={{ xs: "20px", sm: "40px" }} // Padding responsivo
                boxSizing="border-box"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                position="relative"
                boxShadow={3}
            >
                <Stack direction="column" alignItems="center">
                    <Typography
                        sx={{
                            color: "#000",
                            fontWeight: 900,
                            textAlign: "center", // Centraliza o texto
                        }}
                        variant="h4"
                    >
                        QUAL É O NOME
                    </Typography>

                    <Typography
                        sx={{
                            color: "#000",
                            marginTop: "0",
                            textAlign: "center", // Centraliza o texto
                        }}
                        fontWeight={100}
                        variant="h5"
                    >
                        do personagem
                    </Typography>
                </Stack>

                <TextField
                    placeholder="ex: Rex Vortex"
                    variant="outlined"
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                        marginTop: "20px",
                        marginBottom: { sm: "100px" }, // Espaçamento inferior em desktop
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                            color: "black",
                            "& fieldset": {
                                borderColor: (theme) => theme.palette.primary.main,
                            },
                            "&:hover fieldset": {
                                borderColor: (theme) => theme.palette.secondary.main,
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: (theme) => theme.palette.secondary.main,
                            },
                        },
                        "& .MuiInputLabel-root": {
                            color: "black",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            color: (theme) => theme.palette.primary.main,
                        },
                    }}
                />

                {/* Botão Responsivo */}
                <Button
                    variant="contained"
                    size="large"
                    onClick={next}
                    disabled={name === ""}
                    sx={{
                        marginTop: "30px",
                        backgroundColor: (theme) => theme.palette.secondary.main,
                        "&:hover": {
                            backgroundColor: (theme) => theme.palette.secondary.dark,
                        },
                        width: { xs: '100%', sm: '150px' }, // 100% em mobile e largura fixa em desktop
                        position: { xs: 'static', sm: 'absolute' }, // Estilo estático em mobile e absoluto em desktop
                        bottom: { sm: 20 }, // Posiciona no canto inferior direito em desktop
                        right: { sm: 20 }, // Posiciona no canto inferior direito em desktop
                    }}
                >
                    Próximo
                </Button>
            </Stack>
        </Stack>
    );
}

export default App;