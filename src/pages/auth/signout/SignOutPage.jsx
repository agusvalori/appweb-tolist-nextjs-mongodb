"use client";
import { Box, Button, Paper } from "@mui/material";
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
    const { error } = await signOut();
    if (error) {
      return alert(error);
    }

    return router.push("/auth/signup");
  };
  return (
    <Box>
      <Paper>
        <Box></Box>
        <Box></Box>
        <Box>
          <Button onClick={handleSubmit}>Cerrar cesion</Button>
          <Button onClick={handleBtnVolver}>Volver</Button>
        </Box>
      </Paper>
    </Box>
  );
};
