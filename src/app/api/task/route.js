import { Task } from "@/models/Task";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

const GET = async () => {
  //consultar bases de datos
  connectDB();
  const tasks = await Task.find();
  console.log("obteniendo tareas: ", tasks.length);
  return NextResponse.json({
    message: "Obteniendo tareas",
    data: tasks,
  });
};

const POST = async (request) => {
  try {
    const reqBody = await request.json();
    const { title, description } = reqBody;
    let authorId = "65384193e4300013d8557048";

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
            error?.keyValue?.title || ""
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

const DELETE = async () => {
  //consultar bases de datos
  connectDB();
  const { deletedCount } = await Task.deleteMany();
  return NextResponse.json({
    message: `Se eliminaron ${deletedCount} tareas`,
    data: [{}],
  });
};
export { GET, POST, DELETE };
