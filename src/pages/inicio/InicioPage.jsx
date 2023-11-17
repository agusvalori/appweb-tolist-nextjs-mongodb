"use client";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import React from "react";

export const InicioPage = () => {
  const { data } = useSession();
  const user = data?.user || false;
  return (
    <Container
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "400px",
          padding: "20px",
          backgroundColor: "#f39f5a",
        }}
      >
        <Typography variant="h5" textAlign="center">
          Bienvenido a la Lista de Tareas
        </Typography>
        <Typography variant="h6" mb={2} textAlign="center">
          {user.username || ""}
        </Typography>
        <Typography variant="body1" mb={1} textAlign="center">
          En esta plataforma, puedes organizar tus tareas de manera eficiente.
          Crea, edita y elimina tareas fácilmente. ¡Haz que tu día sea más
          productivo!
        </Typography>
        <Box>
          <Typography variant="h5" mt={1} textAlign="center">
            Con ella podrás
          </Typography>
          <Typography variant="body1" mb={1}>
            <strong>- Crear tareas: </strong>Agrega nuevas tareas con
            descripciones y fechas límite.
          </Typography>
          <Typography variant="body1" mb={1}>
            <strong>- Editar tareas:</strong> Modifica detalles como el nombre,
            la descripción o la fecha límite.
          </Typography>
          <Typography variant="body1">
            <strong>- Eliminar tareas: </strong>Marca las tareas como
            completadas y observa cómo tu lista se vuelve más organizada.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};
