"use client";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import { Oregano } from "next/font/google";
import { useTask } from "@/context/TaskContext";
import { Edit } from "@mui/icons-material";

const fontOregano = Oregano({
  weight: "400",
  style: ["italic"],
  subsets: ["latin"],
});

const iconBtnEditStyled = {
  backgroundColor: "#f39f5a",
  color: "white",
  "&:hover": {
    transform: "scale(1.2)",
    backgroundColor: "#f39f5a",
    color: "white",
  },
};

const iconBtnAddStyled = {};

export const TareasAgregarEditar = ({ task, editarTareas }) => {
  const [open, setOpen] = useState(false);
  const initialValues = { description: "", title: "" };
  const [values, setValues] = useState(task ? task : initialValues);
  const { crearTareas } = useTask();

  const handleModalClosed = () => {
    setValues(initialValues);
    setOpen(false);
  };
  const handleInputChange = (e) => {
    const { value, name } = e.target;

    if (
      (name == "description" && value.length <= 120) ||
      (name == "title" && value.length <= 50)
    ) {
      setValues({ ...values, [name]: value });
    }
  };

  const handleClear = () => {
    setValues(initialValues);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let message;
    if (task) {
      let res = await editarTareas(values);
      message = res.message || "";
      handleModalClosed();
    } else {
      message = await crearTareas(values);
    }

    alert(message);
  };

  useEffect(() => {
    setValues(task ? task : initialValues);
  }, [open]);

  return (
    <Box>
      <IconButton
        color="success"
        sx={task ? iconBtnEditStyled : iconBtnAddStyled}
        onClick={() => setOpen(!open)}
      >
        {task ? <Edit /> : <AddIcon />}
      </IconButton>
      <Modal
        open={open}
        onClose={handleModalClosed}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <form onSubmit={handleSubmit}>
          <Paper
          elevation={4}
            sx={{
              width: "350px",
              padding: "10px",
              display: "grid",
              rowGap: "15px",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography fontFamily={fontOregano.style} fontSize={30}>
                {task ? "Editar" : "Agregar"} tarea
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <TextField
                required
                label="Titulo"
                name="title"
                multiline
                rows={2}
                value={values.title}
                onChange={handleInputChange}
              />
              <TextField
                required
                label="Descripcion"
                name="description"
                multiline
                rows={4}
                value={values.description}
                onChange={handleInputChange}
              />
              <Typography
                sx={{ display: "flex", justifyContent: "flex-end" }}
                fontSize={"small"}
              >
                Caracteres restantes {120 - values?.description.length}
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
              <Button type="submit" variant="contained" color="success">
                {task ? "Editar" : "Agregar"}
              </Button>
              <Button onClick={handleClear} variant="contained" color="info">
                Limpiar
              </Button>
              <Button
                onClick={handleModalClosed}
                variant="contained"
                color="warning"
              >
                Finalizar
              </Button>
            </Box>
          </Paper>
        </form>
      </Modal>
    </Box>
  );
};
