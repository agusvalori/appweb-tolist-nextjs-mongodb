"use client";
import { AccountCircleRounded } from "@mui/icons-material";
import { AppBar, Box, Container, IconButton } from "@mui/material";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathName = usePathname();

  const LinkStyled = ({ label, path }) => {
    const styledActivo = {
      color: "#e8bcb9",
      transform: "scale(1.5)",
    };
    const styledInactivo = { color: "#f39f5a", fontSize: 20 };
    const styled = path === pathName ? styledActivo : styledInactivo;
    return (
      <NextLink href={path} style={{ textDecoration: "none", ...styled }}>
        {label}
      </NextLink>
    );
  };

  return (
    <AppBar position="static" color="transparent">
      <Box
        sx={{
          width: "100%",
          height: "40px",
          backgroundColor: "#1d1a39",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "100px 100px 100px",
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <LinkStyled label={"Inicio"} path={"/"} />
          <LinkStyled label={"Tareas"} path={"/tareas"} />
          <LinkStyled label={"Perfil"} path={"/perfil"} />
        </Box>
      </Box>
    </AppBar>
  );
};

export default NavBar;
