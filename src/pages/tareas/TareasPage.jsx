import React from "react";
import { TareasMostrar } from "./TareasMostrar";
import { TareasAgregarEditar } from "./TareasAgregarEditar";
import { Box } from "@mui/material";

export const TareasPage = () => {
  return (
    <Box>
      <TareasMostrar />
      <TareasAgregarEditar task={false} />
    </Box>
  );
};
