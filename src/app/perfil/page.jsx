import React from "react";
import { PerfilPage } from "../../pages/perfil/PerfilPage";
import { PagesAuth } from "@/pages/PagesAuth";

export const metadata = {
  title: "Perfil - toListApp",
  description: "Perfil del usuario",
  keywords: ["Perfil", "datos", "usuario"],
};

const Perfil_Page = () => {
  return (
    <PagesAuth>
      <PerfilPage />
    </PagesAuth>
  );
};

export default Perfil_Page;
