import React, { useState } from "react";
import { Button, Stack, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../midia/background_login.jpg";

function App() {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    function next() {
        navigate("FicSpeak//login/interests");
        localStorage.setItem("name", name);
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
                    background: "#0d0d0d",
                    opacity: 0.9,
                }}
            ></Stack>
            <Stack
                bgcolor="#fff"
                width={{ xs: "90%", sm: "500px", md: "600px" }}  // Responsivo
                height={{ xs: "500px", md: "700px" }}  // Responsivo
                borderRadius="10px"
                padding={{ xs: "20px", md: "40px" }}  // Responsivo
                boxSizing="border-box"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                position="relative"
                boxShadow={3}
            >
                <Stack alignItems="center" direction="row" spacing={1}>
                    <Typography
                        sx={{ color: (theme) => theme.palette.primary.main }}
                        variant="h4"
                        fontSize={{ xs: "1.5rem", md: "2rem" }} // Responsivo
                    >
                        Qual é o seu
                    </Typography>
                    <Typography
                        sx={{ color: (theme) => theme.palette.secondary.main }}
                        variant="h4"
                        fontSize={{ xs: "1.5rem", md: "2rem" }} // Responsivo
                    >
                        nome
                    </Typography>
                    <Typography
                        sx={{ color: (theme) => theme.palette.primary.main }}
                        variant="h4"
                        fontSize={{ xs: "1.5rem", md: "2rem" }} // Responsivo
                    >
                        ?
                    </Typography>
                </Stack>

                <TextField
                    label="Nome"
                    variant="outlined"
                    onChange={(e) => setName(e.target.value)}
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
