import { AppBar, Box, Container, Typography, Link as MuiLink } from "@mui/material";
import NextLink from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <AppBar position="static" >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem 0",
          }}
        >
          <Box sx={{ display: "flex", gap: "30%",}}>
            <NextLink href="/" >Inicio</NextLink>
            <NextLink href="/tareas">Tareas</NextLink>
            <NextLink href="/contacto">Contacto</NextLink>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

const NavItem = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <MuiLink color="inherit" underline="none">
        {children}
      </MuiLink>
    </NextLink>
  );
};

export default NavBar;