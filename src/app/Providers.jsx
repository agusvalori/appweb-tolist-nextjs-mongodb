"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { TaskContextProvider } from "../context/TaskContext";
import { UserContextProvider } from "../context/UserContext";

const Providers = ({ children }) => {
  return (
    <UserContextProvider>
      <SessionProvider>
        <TaskContextProvider>{children}</TaskContextProvider>
      </SessionProvider>
    </UserContextProvider>
  );
};

export default Providers;
