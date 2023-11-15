import { useTask } from "@/context/TaskContext";
import { Delete } from "@mui/icons-material";
import {
  Box,
  Paper,
  Typography,
  Checkbox,
  IconButton,
  TextField,
} from "@mui/material";
import React from "react";
import { TareasAgregarEditar } from "../agregarEditar/TareasAgregarEditar";
import { Acme, Indie_Flower } from "next/font/google";

const fontAcme = Acme({
  weight: "400",
  subsets: ["latin"],
});

const fontIndieFlower = Indie_Flower({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
});

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
        backgroundColor: `#AE445a`,
        gridTemplateColumns: "75px 250px 100px",
      }}
    >
      <Box>
        <Checkbox
          color="default"
          sx={{
            backgroundColor: "#f39f5a",
            color: "white",
            "&:hover": {
              transform: "scale(1.2)",
              backgroundColor: "#f39f5a",
              color: "white",
            },
          }}
          checked={status}
          onChange={handleCheckedChange}
        />
      </Box>
      <Box
        sx={{
          display: "grid",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Box>
          <Typography
            sx={{
              width: "250px",
              height: "70px",
              textAlign: "center",
              wordWrap: "break-word",
            }}
            fontFamily={fontAcme.style}
            fontSize={25}
            color={"white"}
            component={"h2"}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography
            fontFamily={fontIndieFlower.style}
            color={"white"}
            component={"p"}
            sx={{
              width: "250px",
              height: "90px",
              textAlign: description.length<=32?"center":"",
              wordWrap: "break-word",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <IconButton
          sx={{
            backgroundColor: "#f39f5a",
            color: "white",
            "&:hover": {
              transform: "scale(1.2)",
              backgroundColor: "#f39f5a",
              color: "white",
            },
          }}
          onClick={handleDeleteChange}
        >
          <Delete sx={{ color: "white" }} />
        </IconButton>
        <TareasAgregarEditar task={task} editarTareas={editarTareas} />
      </Box>
    </Paper>
  );
};
