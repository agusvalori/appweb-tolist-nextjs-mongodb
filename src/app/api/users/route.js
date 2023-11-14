import { NextResponse } from "next/server";

const GET = async () => {
  //consultar bases de datos
  const res = await fetch("https://dummyjson.com/users");

  if (res.status === 200) {
    const data = await res.json();
    return NextResponse.json({ message: "Obteniendo datos", data: data.users });
  } else {
    return NextResponse.json({
      message: "No se pudieron obtener usuarios",
      data: null,
    });
  }
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
