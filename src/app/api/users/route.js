import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

const GET = async () => {
  connectDB();
  
  return NextResponse.json({ message: "Obteniendo datos", data: data.users });
};

const POST = async (request) => {
  //consultar bases de datos

  //const reqBody = await request.json();
  const { firstName } = await request.json();
  console.log(firstName);
  return NextResponse.json({ message: "Creando datos", data: [{}] });
};

const PUT = async () => {
  //consultar bases de datos
  return NextResponse.json({ message: "Actualizando datos", data: [{}] });
};

const DELETE = async () => {
  //consultar bases de datos
  return NextResponse.json({ message: "Eliminnado datos", data: [{}] });
};
export { GET, POST, PUT, DELETE };
