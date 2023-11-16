"use client";
import { useSession } from "next-auth/react";
import React from "react";

export const InicioPage = () => {
  const { data } = useSession();
  console.log(data);
  return <div>InicioPage</div>;
};
