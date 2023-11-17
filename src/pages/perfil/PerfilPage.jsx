"use client";
import { ExitToApp } from "@mui/icons-material";
import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { Oregano } from "next/font/google";
const fontOregano = Oregano({
  weight: "400",
  style: ["italic"],
  subsets: ["latin-ext"],
});
export const PerfilPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "400px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          backgroundColor: "#f39f5a",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            sx={{ width: 90, height: 90 }}
            alt="Avatar"
            src={session?.user.avatarUrl}
          />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h5" fontFamily={fontOregano.style}>
            <strong>Perfil del Usuario</strong>
          </Typography>
        </Box>
        <Box sx={{ display: "grid", rowGap: "10px" }}>
          <Typography>
            <strong>Nombre de Usuario:</strong> {session?.user.username}
          </Typography>
          <Typography>
            <strong>Email:</strong> {session?.user.email}
          </Typography>
          <Typography>
            <strong>Nombre:</strong> {session?.user.firstName}
          </Typography>
          <Typography>
            <strong>Apellido:</strong> {session?.user.lastName}
          </Typography>
          {/* Agrega más campos según tu modelo de usuario */}
        </Box>
      </Paper>
      <Paper
        elevation={4}
        sx={{
          width: "400px",
          display: "grid",
          rowGap: "10px",
          padding: "10px",
          backgroundColor: "#f39f5a",
        }}
      >
        <Button
          sx={{ color: "black" }}
          onClick={handleSignOut}
          variant="contained"
          color="error"
          startIcon={<ExitToApp sx={{ color: "black" }} />}
        >
          Cerrar sesion
        </Button>
      </Paper>
    </Box>
  );
};
