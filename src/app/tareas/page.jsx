import { PagesAuth } from "@/pages/PagesAuth";
import { TareasPage } from "@/pages/tareas/TareasPage";

export const metadata = {
  title: "Tareas - toListApp",
  description: "Crud tareas toListApp",
  keywords: ["Listas", "Tareas", "Organicacion"],
};

const Tareas_Page = () => {
  return (
    <PagesAuth>
      <TareasPage />
    </PagesAuth>
  );
};

export default Tareas_Page;
