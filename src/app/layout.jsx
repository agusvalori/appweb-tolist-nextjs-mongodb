import { Box, Paper } from "@mui/material";
import NavBar from "./NavBar";
import "./global.css";
import { TaskContextProvider } from "@/context/TaskContext";

export const metadata = {
  title: "Tolist.js",
  description: "Aplicacion de lista de tareas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <TaskContextProvider>
          <Box>
            <NavBar />
          </Box>
          <Paper sx={{ marginTop: "10px", height: "85vh" }}>{children}</Paper>
        </TaskContextProvider>
      </body>
    </html>
  );
}
