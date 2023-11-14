import { NextResponse } from "next/server";



const GET = async (request, { params }) => {
  //consultar bases de datos
  const userId = params?.userID || false;
  const res = await fetch(`https://dummyjson.com/users/${userId}`);

  if (res.status === 200) {
    const data = await res.json();
    return NextResponse.json({
      message: `Obteniendo datos usuario id: ${userId}`,
      data: data,
    });
  } else {
    return NextResponse.json({
      message: "No se pudieron obtener usuarios",
      data: null,
    });
  }
};

const POST = async () => {
  //consultar bases de datos
  const prisma = new PrismaClient()
  prisma.user.create({})
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
