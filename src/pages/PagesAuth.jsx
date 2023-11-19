"use client";
import React from "react";
import { useUser } from "../context/UserContext";
import { SignInPage } from "./auth/signin/SignInPage";

const PagesAuth = ({ children }) => {
  const { isAuthenticated } = useUser();
  return !isAuthenticated() ? <SignInPage /> : <>{children}</>;
};

export { PagesAuth };
