import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../midia/background_login.jpg";

function App() {
    const navigate = useNavigate();

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
                overflow: "hidden",
            }}
        >
            <Stack
                width="100vw"
                height="100vh"
                position="absolute"
                sx={{
                    background: "#0d0d0d",
                    opacity: 0.9,
                }}
            ></Stack>
            <Stack
                bgcolor="#ffff"
                width="600px"
                height="700px"
                borderRadius="10px"
                padding="20px"
                boxSizing="border-box"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                position="relative"
            >
                <Stack alignItems="center" direction="row" spacing={1}>
                    <Typography
                        sx={{ color: (theme) => theme.palette.primary.main }}
                        variant="h4"
                    >
                        Bem-vindo ao
                    </Typography>
                    <Typography
                        sx={{ color: (theme) => theme.palette.secondary.main }}
                        variant="h4"
                    >
                        FicSpeak
                    </Typography>
                </Stack>

                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate("/login/name")}
                    sx={{
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
