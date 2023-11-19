"use client";

import { useSession } from "next-auth/react";

const { createContext, useContext, useState, useEffect } = require("react");

const UserContext = createContext();

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deveria estar dentro de un UserContextProvider");
  }
  return context;
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const { status, data } = useSession();

  useEffect(() => {
    console.log("useefect userCOntext")
    obtenerUsuario();
  }, [data]);

  const obtenerUsuario = () => {
    console.log("obtenerUsuario")
    setUser(data?.user || false);
  };
  const isAuthenticated = () => {
    return status === "authenticated";
  };

  const registrarUsuario = async (usuario) => {
    const result = await fetch("../api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    const res = await result.json();
    console.log(res);
    const { message } = res;
    return { message };
  };

  return (
    <UserContext.Provider
      value={{ user, obtenerUsuario, registrarUsuario, isAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider, useUser };
