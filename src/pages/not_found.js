import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFound() {
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
                backgroundColor: "#1D3557",
            }}
        >
            <Typography variant="h3" sx={{ mb: 3 }}>
                404 - Página não encontrada
            </Typography>
            <Button
                variant="contained"
                onClick={() => navigate("/")}
                sx={{ backgroundColor: "secondary.main" }}
            >
                Voltar para Home
            </Button>
        </Stack>
    );
}

export default NotFound;
