"use client";
const { createContext, useContext, useState } = require("react");

const UserContext = createContext();

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deveria estar dentro de un UserContextProvider");
  }
  return context;
};

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

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
    <UserContext.Provider value={{ users, registrarUsuario }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider, useUser };
