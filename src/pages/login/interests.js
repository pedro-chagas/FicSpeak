import React, { useState } from "react";
import {
    Button,
    Stack,
    Typography,
    TextField,
    Autocomplete,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../midia/background_login.jpg";

function App() {
    const [interests, setInterests] = useState("");
    const navigate = useNavigate();

    function next() {
        navigate("/");

        localStorage.setItem("interests", JSON.stringify(interests));
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
            >
                <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                    mb="15px"
                >
                    <Typography
                        sx={{ color: (theme) => theme.palette.primary.main }}
                        variant="h4"
                    >
                        Do que você
                    </Typography>
                    <Typography
                        sx={{ color: (theme) => theme.palette.secondary.main }}
                        variant="h4"
                    >
                        gosta
                    </Typography>
                    <Typography
                        sx={{ color: (theme) => theme.palette.primary.main }}
                        variant="h4"
                    >
                        ?
                    </Typography>
                </Stack>

                <Autocomplete
                    multiple
                    limitTags={10}
                    options={[
                        { title: "Anime" },
                        { title: "Marvel" },
                        { title: "Comics" },
                        { title: "DC" },
                        { title: "Séries" },
                        { title: "Filmes" },
                        { title: "Famosos" },
                        { title: "Música" },
                        { title: "Jogos" },
                        { title: "Tecnologia" },
                        { title: "Literatura" },
                        { title: "Desenhos Animados" },
                        { title: "História" },
                        { title: "Cultura Pop" },
                    ]}
                    onChange={(event, newValue) => setInterests(newValue)}
                    getOptionLabel={(option) => option.title}
                    renderOption={(props, option) => (
                        <li
                            {...props}
                            style={{ backgroundColor: "#fff", color: "#000" }}
                        >
                            {option.title}
                        </li>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Favoritos"
                            placeholder="Escolha bem..."
                            sx={{
                                "& .MuiAutocomplete-tag": {
                                    background: (theme) =>
                                        theme.palette.secondary.main,
                                    color: "white",
                                },
                            }}
                        />
                    )}
                    sx={{ width: "500px" }}
                />

                <Button
                    variant="contained"
                    size="large"
                    onClick={next}
                    disabled={interests === "" || interests === []}
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
