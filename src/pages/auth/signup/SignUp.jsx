import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { SignUpForm } from "./SignUpForm";


export const SignUp = () => {
  
  return (
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
          <Box>
            <Typography>Registrar Nuevo Usuario</Typography>
          </Box>
          <SignUpForm />
        </Paper>
      </Box>
    </div>
  );
};
