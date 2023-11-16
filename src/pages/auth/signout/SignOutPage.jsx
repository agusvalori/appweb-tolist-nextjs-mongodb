"use client";
import { Box, Button, Paper, Typography } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export const SignOutPage = () => {
  const router = useRouter();

  const handleBtnVolver = () => {
    router.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "400px",
          display: "grid",
          rowGap: "10px",
          padding: "10px",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography>Cerrar Sesion</Typography>
        </Box>
        <Box></Box>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <Button type="submit" variant="contained" color="warning">
            Cerrar sesion
          </Button>
          <Button variant="contained" onClick={handleBtnVolver}>
            Volver
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
