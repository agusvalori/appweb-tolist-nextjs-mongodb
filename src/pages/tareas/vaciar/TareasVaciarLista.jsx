"use client";
import { useTask } from "@/context/TaskContext";
import { HighlightOff } from "@mui/icons-material";
import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

export const TareasVaciarLista = () => {
  const [open, setOpen] = useState(false);
  const { tasks, eliminarTareas } = useTask();

  const handleDeletAll = async () => {
    const { message } = await eliminarTareas();
    alert(message);
    handleModalClosed();
  };
  const handleModalClosed = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        color="warning"
        variant="contained"
        onClick={() => setOpen(!open)}
        startIcon={<HighlightOff />}
      >
        Vaciar tareas
      </Button>

      <Modal
        open={open}
        onClose={handleModalClosed}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Paper
          sx={{
            width: "300px",
            padding: "10px",
            display: "grid",
            rowGap: "15px",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography>Vaciar lista de tareas</Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography>Esta Seguro de:</Typography>
            <Typography>querer eliminar todas las tareas</Typography>
            <Typography>Se eliminaran: {tasks.length} tareas</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button variant="outlined" color="error" onClick={handleDeletAll}>
              Eliminar
            </Button>
            <Button onClick={handleModalClosed} variant="outlined" color="info">
              Volver
            </Button>
          </Box>
        </Paper>
      </Modal>
    </div>
  );
};
