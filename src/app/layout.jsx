import { Box, Paper } from "@mui/material";
import NavBar from "./NavBar";
import "./global.css";
import { TaskContextProvider } from "@/context/TaskContext";
import { UserContextProvider } from "@/context/UserContext";
import { SessionProvider } from "next-auth/react";
import Providers from "./Providers";

export const metadata = {
  title: "Tolist.js",
  description: "Aplicacion de lista de tareas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <Box>
            <NavBar />
          </Box>
          <Paper
            elevation={4}
            sx={{
              backgroundColor: `#451952`,
              margin: "10px",
              height: "85vh",
              flex: 1,
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                width: "4px",
                display: "none" /* Ocultar scroll */,
              },
            }}
          >
            {children}
          </Paper>
        </Providers>
      </body>
    </html>
  );
}
