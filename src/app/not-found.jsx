import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Bangers } from "next/font/google";
import Link from "next/link";
const fontBangers = Bangers({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "No Se Encontro la pagina",
  description: "Catalogo de articulos de descartablesde  myvdescartables",
  keywords: ["tienda", "descartables", "catalogo"],
};

const NotFound = () => {
  return (
    <Box
      sx={{
        width: "99%",
        height: "99%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Paper elevation={4} sx={{ padding: "15px" }}>
        <Box>
          {" "}
          <Typography
            color={"error"}
            fontFamily={fontBangers.style}
            fontSize={100}
            component={"h1"}
          >
            {" "}
            404
          </Typography>
          <Typography
            color={"error"}
            fontFamily={fontBangers.style}
            component={"p"}
          >
            No se encontro la pagina solicitada
          </Typography>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Link href={"/"}>Volver</Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default NotFound;
