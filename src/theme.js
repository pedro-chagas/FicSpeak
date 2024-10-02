import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#4d4d4d",
        },
        secondary: {
            main: "#6A4C9C",
        },
        background: {
            default: "#1D3557",
        },
        text: {
            primary: "#FFFFFF",
        },
        error: {
            main: "#E63946",
        },
        action: {
            active: "#F4A261",
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: "2.5rem",
        },
        h2: {
            fontWeight: 600,
            fontSize: "2rem",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: "8px",
                    backgroundColor: "#F4A261",
                    "&:hover": {
                        backgroundColor: "#E08D46",
                    },
                },
            },
        },
    },
});

export default theme;
