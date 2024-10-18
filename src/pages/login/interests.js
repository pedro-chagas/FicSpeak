import React, { useState } from "react";
import {
    Button,
    Stack,
    Typography,
    TextField,
    Autocomplete,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { db, collection, addDoc } from "../../firebaseConfig"; // Importe addDoc
import backgroundImage from "../../midia/background_login.jpg";

function App() {
    const [interests, setInterests] = useState([]);
    const navigate = useNavigate();
    const name = localStorage.getItem("name"); // Obtém o nome do localStorage

    const saveUserData = async () => {
        try {
            const userData = {
                name: name,
                interests: interests,
            };

            // Salva os dados na coleção "users"
            await addDoc(collection(db, "users"), userData);
            console.log("Usuário salvo com sucesso");
        } catch (error) {
            console.error("Erro ao salvar o usuário:", error);
        }
    };

    const next = () => {
        saveUserData(); // Chama a função para salvar os dados
        navigate("/FicSpeak"); // Navega para a próxima página
    };

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
                height={{ xs: "500px", md: "700px" }}  // Altura flexível para mobile
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
                        Do que você
                    </Typography>
                    <Typography
                        sx={{ color: (theme) => theme.palette.secondary.main }}
                        variant="h4"
                        fontSize={{ xs: "1.5rem", md: "2rem" }} // Responsivo
                    >
                        gosta
                    </Typography>
                    <Typography
                        sx={{ color: (theme) => theme.palette.primary.main }}
                        variant="h4"
                        fontSize={{ xs: "1.5rem", md: "2rem" }} // Responsivo
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
                    getOptionLabel={(option) => option.title}
                    onChange={(event, newValue) => setInterests(newValue)}
                    renderOption={(props, option) => (
                        <li {...props} style={{ backgroundColor: "#fff", color: "#000" }}>
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
                                    backgroundColor: (theme) =>
                                        theme.palette.secondary.main,
                                    color: "#fff",
                                },
                            }}
                        />
                    )}
                    sx={{ width: '100%', marginTop: '20px' }} // Responsivo para largura e margem superior
                />

                <Button
                    variant="contained"
                    size="large"
                    onClick={next}
                    disabled={interests.length === 0}
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
