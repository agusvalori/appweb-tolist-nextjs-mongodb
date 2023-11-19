"use client";

import { SessionProvider } from "next-auth/react";
import React, { useEffect } from "react";
import { TaskContextProvider } from "../context/TaskContext";
import { UserContextProvider } from "../context/UserContext";

const Providers = ({ children }) => {
  useEffect(() => {
    console.log("hola ")
  }, [])
  
  return (
    <SessionProvider>
      <UserContextProvider>
        <TaskContextProvider>{children}</TaskContextProvider>
      </UserContextProvider>
    </SessionProvider>
  );
};

export default Providers;
