"use client";
import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { Bangers } from "next/font/google";
import { useRouter } from "next/navigation";
const fontBangers = Bangers({ weight: "400", subsets: ["latin"] });

const NotFound = () => {
  const router = useRouter();

  const handleRouter = () => {
    router.push("/");
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: "15px",
          backgroundColor: `#301952`,
          display: "grid",
          gridTemplateRows: "200px 60px",
        }}
      >
        <Box>
          {" "}
          <Typography
            sx={{ color: "#e8bcb9" }}
            fontFamily={fontBangers.style}
            fontSize={100}
            component={"h1"}
          >
            {" "}
            404
          </Typography>
          <Typography
            sx={{ color: "#e8bcb9" }}
            fontFamily={fontBangers.style}
            component={"p"}
          >
            No se encontro la pagina solicitada
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{ color: "#f39f5a", boxShadow: "2px 2px 3px 3px" }}
            variant="outlined"
            onClick={handleRouter}
          >
            Volver
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default NotFound;
