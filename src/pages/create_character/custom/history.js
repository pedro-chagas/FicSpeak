import React, { useState } from "react";
import { Button, Stack, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../../midia/wallpaper_create_existing.jpg";

function App() {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    function next() {
        navigate("/create/custom/avatar");
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
                        QUAL É
                    </Typography>

                    <Typography
                        sx={{
                            color: "#000",
                            marginTop: "0",
                        }}
                        fontWeight={100}
                        variant="h5"
                    >
                        a história dele?
                    </Typography>
                </Stack>

                <TextField
                    placeholder="Ex: Rex vem de uma dimensão onde a tecnologia avançou muito mais rapidamente do que na Terra. Ele decidiu explorar outras realidades, sempre à procura de novas experiências e desafios.Ele se tornou uma lenda entre viajantes dimensionais, conhecido por sua habilidade em escapar de situações perigosas com astúcia e um sorriso no rosto."
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
