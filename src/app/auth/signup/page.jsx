import { SignUp } from "@/pages/auth/signup/SignUp";

export const metadata = {
  title: "Tareas - toListApp",
  description: "Crud tareas toListApp",
  keywords: ["Listas", "Tareas", "Organicacion"],
};

const Register_Page = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default Register_Page;
