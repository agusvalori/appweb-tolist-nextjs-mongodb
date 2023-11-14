"use client";
import { Box, Button } from "@mui/material";
import React from "react";

export const ContactoPage = () => {
  return (
    <Box>
      <Button
        onClick={() => {
          alert("Hola Mundi");
        }}
      >
        Alerta
      </Button>
    </Box>
  );
};
