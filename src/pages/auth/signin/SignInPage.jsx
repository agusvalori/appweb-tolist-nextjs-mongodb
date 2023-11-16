"use client"
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { SignInPageForm } from "./SignInPageForm";

export const SignInPage = () => {
  return(
    <div>
    <Box
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
        <Box sx={{textAlign:"center"}}>
          <Typography>Iniciar sesion</Typography>
        </Box>
        <SignInPageForm/>
      </Paper>
    </Box>
  </div>
  )
};
