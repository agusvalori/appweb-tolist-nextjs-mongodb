import React from "react";
import { TareasMostrar } from "./mostrar/TareasMostrar";
import { TareasAgregarEditar } from "./agregarEditar/TareasAgregarEditar";
import { Box, Paper } from "@mui/material";
import { TareasVaciarLista } from "./vaciar/TareasVaciarLista";

export const TareasPage = () => {
  return (
    <Box sx={{ height: "90vh" }}>
      <Box
        sx={{
          margin: "10px",
          paddingTop: "5px",
          height: "78vh",
          flex: 1,
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "4px",
            display: "none" /* Ocultar scroll */,
          },
        }}
      >
        <TareasMostrar />
      </Box>
      <Box sx={{ position: "fixed", bottom: 10, width: "100%" }}>
        <Box
          sx={{
            display: "grid",
            gridAutoFlow: "column",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "10px",
          }}
        >
          <Paper
            elevation={4}
            sx={{
              display: "grid",
              gridAutoFlow: "column",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "10px",
              padding: "5px",
            }}
          >
            <TareasAgregarEditar task={false} />
            <TareasVaciarLista />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};
