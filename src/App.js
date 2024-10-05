import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Routes from "./routes/router";
import "./App.css";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={Routes} />
        </ThemeProvider>
    );
}

export default App;
