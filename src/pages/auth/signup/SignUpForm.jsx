"use client";
import { useUser } from "@/context/UserContext";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const SignUpForm = () => {
  const { registrarUsuario } = useUser();
  const initialValues = {
    username: "",
    password: "",
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
  };
  const [values, setValues] = useState(initialValues);
  const router = useRouter();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleRouter = () => {
    router.push("/auth/sigin");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { message } = await registrarUsuario(values);
    console.log(message)
    alert(message);
  };
  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <Box sx={{ display: "grid", rowGap: "10px" }}>
        <TextField
          required
          label="Nombre de usuario"
          name="username"
          value={values?.username}
          onChange={handleInputChange}
        />
        <TextField
          required
          label="Clave"
          name="password"
          value={values?.password}
          onChange={handleInputChange}
        />
        <TextField
          required
          label="Email"
          name="email"
          value={values?.email}
          onChange={handleInputChange}
        />
        <TextField
          label="Telefono"
          name="phone"
          value={values?.phone}
          onChange={handleInputChange}
        />
        <TextField
          label="Nombre"
          name="firstName"
          value={values?.firstName}
          onChange={handleInputChange}
        />
        <TextField
          label="Apellido"
          name="lastName"
          value={values.lastName}
          onChange={handleInputChange}
        />
      </Box>
      <Box>
        <Button type="submit">Registrar</Button>
        <Button onClick={handleRouter}>Ir a inicio de sesion</Button>
      </Box>
    </Box>
  );
};
