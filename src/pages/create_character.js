import React from "react";
import {
    Stack,
    Typography,
    IconButton,
    Grid,
} from "@mui/material";
import BackIcon from "@mui/icons-material/ArrowBack";
import luffy from "../midia/luffy.png";
import messi from "../midia/messi.png";
import anonymous from "../midia/anonymous.png";
import backgroundImage from "../midia/background_create.jpeg";
import { useNavigate } from "react-router-dom";

function Create() {
    const navigate = useNavigate();

    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="100vh"
            boxShadow="border-box"
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
                width="100%"
                height="100px"
                position="fixed"
                top={0}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                padding="15px"
                boxSizing="border-box"
                sx={{
                    background: (theme) => theme.palette.primary.main,
                    boxShadow: 3,
                    zIndex: 1000, 
                }}
            >
                <IconButton
                    aria-label="back"
                    size="large"
                    sx={{
                        width: "70px",
                        height: "70px",
                    }}
                    onClick={() => navigate("/")}
                >
                    <BackIcon fontSize="inherit" />
                </IconButton>
            </Stack>

            <Stack
                width="100%"
                height="calc(100vh - 100px)"
                position="absolute"
                top="100px"
                sx={{
                    background: (theme) => theme.palette.grey[800],
                    opacity: 0.5,
                }}
            />

            <Grid
                container
                justifyContent="center"
                spacing={2}
                sx={{
                    padding: { xs: "10px", md: "20px" },
                    marginTop: '100px', 
                    maxWidth: '1200px', 
                    width: '100%', 
                }}
            >
                {[
                    {
                        image: anonymous,
                        title: "Criar seu próprio",
                        subtitle: "personagem",
                        path: "/create/custom",
                    },
                    {
                        image: messi,
                        title: "Criar um personagem",
                        subtitle: "famoso",
                        path: "/create/famous",
                    },
                    {
                        image: luffy,
                        title: "Criar personagem",
                        subtitle: "existente",
                        path: "/create/existent",
                    },
                ].map(({ image, title, subtitle, path }, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Stack
                            sx={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                cursor: "pointer",
                                transition: "500ms",
                                height: { xs: "200px", sm: "300px" }, 
                                borderRadius: "10px",
                                position: "relative",
                                "&:hover": {
                                    scale: "1.05",
                                },
                            }}
                            onClick={() => navigate(path)}
                        >
                            <Stack
                                width="100%"
                                height="100%"
                                position="absolute"
                                borderRadius="10px"
                                alignItems="center"
                                justifyContent="center"
                                sx={{
                                    backgroundColor: (theme) => theme.palette.grey[700],
                                    opacity: 0.9,
                                    cursor: "pointer",
                                }}
                            >
                                <Typography
                                    sx={{
                                        backgroundColor: (theme) => theme.palette.grey[800],
                                        padding: "5px",
                                        borderRadius: "3px",
                                        fontWeight: "bold",
                                    }}
                                    variant="h6"
                                    textAlign="center"
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    sx={{
                                        backgroundColor: (theme) => theme.palette.grey[800],
                                        color: (theme) => theme.palette.action.active,
                                        padding: "5px",
                                        borderRadius: "0 0 3px 3px",
                                        fontWeight: "bolder",
                                    }}
                                    variant="body1" 
                                    textAlign="center"
                                >
                                    {subtitle}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}

export default Create;