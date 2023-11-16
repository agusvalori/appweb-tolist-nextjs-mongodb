"use client";

import { TaskContextProvider } from "@/context/TaskContext";
import { UserContextProvider } from "@/context/UserContext";
import { SessionProvider } from "next-auth/react";
import React from "react";

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
