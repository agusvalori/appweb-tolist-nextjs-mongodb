import { Box, Button, TextField } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const SignInPageForm = () => {
  const [values, setValues] = useState({ username: "", password: "" });
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleRouterSignUp = () => {
    router.push("/auth/signup");
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ok, error } = await signIn("credentials", {
      username: values?.username,
      password: values?.password,
      redirect: false,
    });
    if (error) {
      return alert(error);
    }

    return router.push("/");
  };
  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <Box sx={{ display: "grid", rowGap: "10px" }}>
        <TextField
          required
          label="username"
          name="username"
          value={values?.username}
          onChange={handleInputChange}
        />
        <TextField
          required
          label="password"
          name="password"
          value={values?.password}
          onChange={handleInputChange}
        />

        <Button type="submit" variant="contained">
          Iniciar sesion
        </Button>
        <Button variant="contained" onClick={handleRouterSignUp}>
          Registrar Usuario
        </Button>
      </Box>
    </Box>
  );
};
