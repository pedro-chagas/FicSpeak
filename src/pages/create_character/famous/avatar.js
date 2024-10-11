import React, { useState } from "react";
import { Stack, Typography, Avatar, Button, CircularProgress } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { storage, db, setDoc, doc } from "../../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import backgroundImage from "../../../midia/wallpaper_create_existing.jpg";

function App() {
    const [avatar, setAvatar] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;

    async function next() {
        if (avatar) {
            setLoading(true);

            const avatarRef = ref(storage, `avatars/${state.name}_${Date.now()}`);
            const uploadTask = uploadBytesResumable(avatarRef, avatar);

            uploadTask.on("state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Avatar upload is " + progress + "% done");
                },
                (error) => {
                    console.error("Error uploading avatar:", error);
                    setLoading(false);
                },
                async () => {
                    const avatarURL = await getDownloadURL(avatarRef);
                    console.log("Avatar URL:", avatarURL);

                    const characterData = {
                        name: state.name,
                        personality: state.personality,
                        response: state.response,
                        nacionality: state.nacionality,
                        details: state.details,
                        wallpaper: state.wallpaper,
                        avatar: avatarURL,
                    };

                    const docRef = doc(db, "characters", state.name);
                    await setDoc(docRef, characterData);
                    console.log("Character saved successfully!");

                    navigate("/", { state: { createdCharacter: true } });
                    setLoading(false); 
                }
            );
        } else {
            console.error("No avatar provided!");
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
                        QUAL É O AVATAR
                    </Typography>

                    <Typography
                        sx={{
                            color: "#000",
                            marginTop: "0",
                        }}
                        fontWeight={100}
                        variant="h5"
                    >
                        do personagem
                    </Typography>
                </Stack>

                <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="avatar-upload"
                    type="file"
                    onChange={(e) => setAvatar(e.target.files[0])}
                />

                <label htmlFor="avatar-upload">
                    <Avatar
                        alt="Avatar Preview"
                        src={avatar ? URL.createObjectURL(avatar) : ""}
                        sx={{
                            width: 150,
                            height: 150,
                            marginBottom: "20px",
                            cursor: "pointer",
                        }}
                    />
                </label>

                <Button
                    variant="contained"
                    size="large"
                    onClick={next}
                    disabled={!avatar || loading}  
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
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Próximo"}
                </Button>
            </Stack>
        </Stack>
    );
}

export default App;
