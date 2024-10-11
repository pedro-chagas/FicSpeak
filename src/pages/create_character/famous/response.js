import React, { useState } from "react";
import { Button, Stack, Typography, TextField } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import backgroundImage from "../../../midia/wallpaper_create_existing.jpg";

function App() {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;


    function next() {
        navigate("/create/famous/details", { state: { ...state, response:name } });
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
                width="600px"
                height="700px"
                borderRadius="10px"
                padding="40px"
                boxSizing="border-box"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                position="relative"
                boxShadow={3}
                spacing={6}
            >
                <Stack direction="column">
                    <Typography
                        sx={{
                            color: "#000",
                            fontWeight: 900,
                        }}
                        variant="h4"
                    >
                        COMO O PERSONAGEM
                    </Typography>

                    <Typography
                        sx={{
                            color: "#000",
                            marginTop: "0",
                        }}
                        fontWeight={100}
                        variant="h5"
                    >
                        deve te responder?
                    </Typography>
                </Stack>

                <TextField
                    placeholder="Ex: Messi responde de forma humilde e direta, sempre focando no time e no esforço coletivo. Ele é calmo e reservado, mas transmite confiança e determinação com suas palavras. Raramente fala de si mesmo, preferindo destacar o trabalho árduo e a dedicação."
                    variant="outlined"
                    onChange={(e) => setName(e.target.value)}
                    rows={4}
                    maxRows={10}
                    multiline
                    sx={{
                        marginTop: "20px",
                        width: "100%",
                        color: "black",
                        "& .MuiOutlinedInput-root": {
                            color: "black",
                            "& fieldset": {
                                borderColor: (theme) =>
                                    theme.palette.primary.main,
                            },
                            "&:hover fieldset": {
                                borderColor: (theme) =>
                                    theme.palette.secondary.main,
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: (theme) =>
                                    theme.palette.secondary.main,
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

                <Button
                    variant="contained"
                    size="large"
                    onClick={next}
                    disabled={name === ""}
                    sx={{
                        marginTop: "30px",
                        backgroundColor: (theme) =>
                            theme.palette.secondary.main,
                        "&:hover": {
                            backgroundColor: (theme) =>
                                theme.palette.secondary.dark,
                        },
                        position: "absolute",
                        bottom: 20,
                        right: 20,
                    }}
                >
                    Próximo
                </Button>
            </Stack>
        </Stack>
    );
}

export default App;
