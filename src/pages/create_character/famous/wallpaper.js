import React, { useState } from "react";
import { Button, Stack, Typography, CircularProgress } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { storage } from "../../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import backgroundImage from "../../../midia/wallpaper_create_existing.jpg";

function App() {
    const [wallpaperFile, setWallpaperFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;

    async function next() {
        if (wallpaperFile) {
            setLoading(true);  // Começa o loading

            const wallpaperRef = ref(storage, `wallpapers/${state.name}_${Date.now()}`);
            const uploadTask = uploadBytesResumable(wallpaperRef, wallpaperFile);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // Aqui pode-se mostrar o progresso do upload se necessário
                },
                (error) => {
                    console.error("Error uploading wallpaper:", error);
                    setLoading(false);  // Termina o loading em caso de erro
                },
                async () => {
                    // Quando o upload for concluído
                    const wallpaperURL = await getDownloadURL(wallpaperRef);
                    console.log("Wallpaper URL:", wallpaperURL);

                    // Navegar para a próxima tela, passando o estado atualizado
                    navigate("/create/famous/avatar", {
                        state: { ...state, wallpaper: wallpaperURL },
                    });

                    setLoading(false);  // Finaliza o loading
                }
            );
        } else {
            console.error("No wallpaper provided!");
        }
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
                backgroundImage: `url(${wallpaperFile ? URL.createObjectURL(wallpaperFile) : backgroundImage})`,
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
                width={{ xs: "90%", sm: "600px" }} // Largura responsiva para celulares e desktops
                maxWidth="600px" // Largura máxima para desktops
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
                        QUAL É A IMAGEM
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
                        de fundo do chat
                    </Typography>
                </Stack>

                <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="wallpaper-upload"
                    type="file"
                    onChange={(e) => setWallpaperFile(e.target.files[0])}
                />

                <label htmlFor="wallpaper-upload">
                    <Stack
                        sx={{
                            width: 300,
                            height: 300,
                            marginBottom: "20px",
                            cursor: "pointer",
                            borderRadius: "10px",
                            backgroundImage: wallpaperFile ? `url(${URL.createObjectURL(wallpaperFile)})` : "",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: !wallpaperFile ? "rgba(0, 0, 0, 0.5)" : "transparent",
                            border: "2px dashed #ccc",
                        }}
                    >
                        {!wallpaperFile && (
                            <Typography sx={{ color: "white", fontWeight: "bold", textAlign: "center", padding: "10px" }}>
                                Selecione um fundo
                            </Typography>
                        )}
                    </Stack>
                </label>

                {/* Botão Responsivo */}
                <Button
                    variant="contained"
                    size="large"
                    onClick={next}
                    disabled={!wallpaperFile || loading}
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
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Próximo"}
                </Button>
            </Stack>
        </Stack>
    );
}

export default App;