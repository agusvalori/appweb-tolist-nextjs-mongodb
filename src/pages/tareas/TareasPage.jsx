"use client";
import React, { useEffect, useState } from "react";
import { TareasMostrar } from "./mostrar/TareasMostrar";
import { TareasAgregarEditar } from "./agregarEditar/TareasAgregarEditar";
import { Box, Paper } from "@mui/material";
import { TareasVaciarLista } from "./vaciar/TareasVaciarLista";
import { TareasFiltro } from "./filtro/TareasFiltro";
import { useTask } from "@/context/TaskContext";

export const TareasPage = () => {
  const [taskList, setTaskList] = useState([]);
  const { obtenerTareas, tasks } = useTask();

  useEffect(() => {
    obtenerTareas();
  }, []);

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);
  return (
    <Box sx={{ height: "90vh" }}>
      <Box sx={{ paddingTop: "10px" }}>
        <TareasFiltro tasks={tasks} setTaskList={setTaskList} />
        <TareasMostrar taskList={taskList} />
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
          <Box
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
