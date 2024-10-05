import React from "react";
import {
    Stack,
    Typography,
    TextField,
    InputAdornment,
    IconButton,
} from "@mui/material";
import BackIcon from "@mui/icons-material/ArrowBack";
import luffy from "../midia/luffy.png";
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
            direction="row"
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

            <Stack
                sx={{
                    backgroundImage: `url(${anonymous})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    transition: "500ms",
                    "&:hover": {
                        scale: "1.1",
                    },
                }}
                width="300px"
                height="350px"
                margin="20px"
                borderRadius="10px"
                position="relative"
                onClick={() => navigate("/create/custom")}
            >
                <Stack
                    width="100%"
                    height="100%"
                    position="absolute"
                    borderRadius="10px"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        background: (theme) => theme.palette.grey[700],
                        opacity: 0.9,
                        cursor: "pointer",
                    }}
                >
                    <Typography
                        sx={{
                            background: (theme) => theme.palette.grey[800],
                            padding: "5px",
                            borderRadius: "3px",
                            fontWeight: "bold",
                        }}
                        variant="h5"
                    >
                        Criar seu próprio
                    </Typography>
                    <Typography
                        sx={{
                            background: (theme) => theme.palette.grey[800],
                            color: (theme) => theme.palette.action.active,
                            padding: "5px",
                            borderRadius: "0 0 3px 3px",
                            fontWeight: "bolder",
                        }}
                        variant="h5"
                    >
                        personagem
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                sx={{
                    backgroundImage: `url(${luffy})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    transition: "500ms",
                    "&:hover": {
                        scale: "1.1",
                    },
                }}
                onClick={() => navigate("/create/existent")}
                width="300px"
                height="350px"
                margin="20px"
                borderRadius="10px"
                position="relative"
            >
                <Stack
                    width="100%"
                    height="100%"
                    position="absolute"
                    borderRadius="10px"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        background: (theme) => theme.palette.grey[700],
                        opacity: 0.9,
                    }}
                >
                    <Typography
                        sx={{
                            background: (theme) => theme.palette.grey[800],
                            padding: "5px",
                            borderRadius: "3px",
                            fontWeight: "bold",
                        }}
                        variant="h5"
                    >
                        Criar personagem
                    </Typography>
                    <Typography
                        sx={{
                            background: (theme) => theme.palette.grey[800],
                            color: (theme) => theme.palette.action.active,
                            padding: "5px",
                            borderRadius: "0 0 3px 3px",
                            fontWeight: "bolder",
                        }}
                        variant="h5"
                    >
                        existente
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Create;
