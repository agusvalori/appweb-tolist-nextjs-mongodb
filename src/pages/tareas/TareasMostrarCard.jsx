import { useTask } from "@/context/TaskContext";
import { Delete } from "@mui/icons-material";
import { Box, Paper, Typography, Checkbox, IconButton } from "@mui/material";
import React from "react";
import { TareasAgregarEditar } from "./TareasAgregarEditar";

export const TareasMostrarCard = ({ task }) => {
  const { title, description, status } = task;

  const { editarTareas, eliminarTareaById } = useTask();

  const handleCheckedChange = async (e) => {
    const { data } = await editarTareas({
      ...task,
      status: e.target.checked,
    });
    if (data.status) {
      alert("Tarea realizada con exito");
    } else {
      alert("La Tarea no fue realizada tendra que volver a hacerla");
    }
  };

  const handleDeleteChange = async () => {
    const { message } = await eliminarTareaById(task);
    alert(message);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        width: "400px",
        padding: "10px",
        display: "grid",
        gridTemplateColumns: "75px 250px 100px",
      }}
    >
      <Box>
        <Checkbox checked={status} onChange={handleCheckedChange} />
      </Box>
      <Box
        sx={{
          display: "grid",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography component={"h3"}>{title}</Typography>
        </Box>
        <Box>
          <Typography component={"h3"}>{description}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <IconButton onClick={handleDeleteChange}>
          <Delete color="error" />
        </IconButton>
        <TareasAgregarEditar task={task} editarTareas={editarTareas} />
      </Box>
    </Paper>
  );
};
