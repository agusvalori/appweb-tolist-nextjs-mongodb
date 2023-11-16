import { Task } from "@/models/Task";
import { connectDB } from "@/utils/connectDB";
import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
const secret = process.env.NEXTAUTH_SECRET;

const GET = async (req) => {
  // Conectarse a la base de datos
  await connectDB();

  // Obtener la sesión
  const token = await getToken({ req, secret });
  const userId = token?.user?._id || false;

  // Consultar las tareas
  const tasks = await Task.find({ authorId: userId });
  return NextResponse.json({
    message: "Obteniendo tareas",
    data: tasks,
  });
};

const POST = async (req) => {
  try {
    //obtenemos los datos desde el cliente
    const reqBody = await req.json();
    const { title, description } = reqBody;

    // Obtener la sesión
    const token = await getToken({ req, secret });
    const authorId = token?.user?._id || false;

    //conectamos a la base de datos
    connectDB();
    const newTask = new Task({ title, description, authorId });
    const task = await newTask.save();
    return NextResponse.json({
      message: "Se creo correctamete la tarea",
      data: task,
    });
  } catch (error) {
    if (error?.code === 11000) {
      return NextResponse.json(
        {
          message: `El valor '${
            Object.keys(error?.keyValue)[0] || ""
          }' ya se encuentra guardado y no se puede duplicar`,
          data: null,
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Error al crear la tarea: " + error.message, data: null },
      { status: 400 }
    );
  }
};

const DELETE = async (req) => {
  // Obtener la sesión
  const token = await getToken({ req, secret });
  const userId = token?.user?._id || false;

  //consultar bases de datos
  connectDB();
  const { deletedCount } = await Task.deleteMany({ authorId: userId });
  return NextResponse.json({
    message: `Se eliminaron ${deletedCount} tareas`,
    data: [{}],
  });
};
export { GET, POST, DELETE };
