"use client";
import { useTask } from "@/context/TaskContext";
import React, { useEffect } from "react";
import { TareasMostrarCard } from "./TareasMostrarCard";
import { Box } from "@mui/material";

export const TareasMostrar = () => {
  const { obtenerTareas, tasks } = useTask();

  useEffect(() => {
    obtenerTareas();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
      }}
    >
      {tasks?.map((task) => (
        <TareasMostrarCard key={task?._id} task={task} />
      ))}
    </Box>
  );
};
