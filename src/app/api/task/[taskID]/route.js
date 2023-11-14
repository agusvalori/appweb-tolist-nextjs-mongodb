import { Task } from "@/models/Task";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

const GET = async (request, { params }) => {
  try {
    const taskID = params.taskID;

    connectDB();
    const task = await Task.findById(taskID);
    if (!task) {
      return NextResponse.json(
        {
          message: `No se encontro la tarea: ${taskID}`,
          data: null,
        },
        { status: 404 }
      );
    }
    return NextResponse.json({
      message: `Obteniendo tarea del id: ${taskID}`,
      data: task,
    });
  } catch (error) {
    return NextResponse.json({
      message: `No se encontro la tarea: ${error.message}`,
      data: null,
    });
  }
};

const PUT = async (request, { params }) => {
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const { title, description, status } = reqBody;
    const taskID = params.taskID;

    const updateTask = await Task.findByIdAndUpdate(
      taskID,
      { title, description, status },
      { new: true }
    );

    return NextResponse.json({
      message: `se ah actualizando la tarea id: ${taskID}`,
      data: updateTask,
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
      { message: "Error al actualizar la tarea: " + error.message, data: null },
      { status: 400 }
    );
  }
};

const DELETE = async (request, { params }) => {
  try {
    const taskID = params.taskID;
    console.log("DELETE: ", taskID);
    connectDB();
    const taskDeleted = await Task.findByIdAndDelete(taskID);
    if (!taskDeleted) {
      return NextResponse.json(
        {
          message: `No se ah encontrado la tarea id:  ${taskID}`,
          data: null,
        },
        { status: 404 }
      );
    }
    return NextResponse.json({
      message: `Se ah eliminando la tarea: ${taskDeleted.title}`,
      data: [],
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: `Error al intentar eliminar el la tarea: ${error.message}`,
        data: [],
      },
      { status: 400 }
    );
  }
};
export { GET, PUT, DELETE };
