import React from "react";
import { Button, Stack, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            width="100vw"
            height="100vh"
            sx={{
                margin: 0,
                color: "#fff",
            }}
        >
            <Stack
                bgcolor="#fff"
                width="700px"
                height="800px"
                borderRadius="10px"
                padding="40px"
                boxSizing="border-box"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                position="relative"
                boxShadow={3}
            >
                <Typography
                    sx={{
                        color: (theme) => theme.palette.primary.main,
                        marginBottom: "20px",
                    }}
                    variant="h4"
                >
                    Do que você gosta?
                </Typography>

                <TextField
                    label="Nome"
                    variant="outlined"
                    sx={{
                        marginTop: "20px",
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
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
                    }}
                />

                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate("/login/name")}
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
