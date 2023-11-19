"use client";

import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask deveria estar dentro de un TaskContextProvider");
  }
  return context;
};

const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const { data: userData } = useSession();

  useEffect(() => {
    obtenerTareas();
  }, [userData]);

  const crearTareas = async (data) => {
    const result = await fetch("../api/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const { message } = await result.json();
    await obtenerTareas();
    return message;
  };

  const obtenerTareas = async () => {
    const result = await fetch("../api/task");
    if (result.status !== 500) {
      const { data, message } = await result.json();
      setTasks(data);
      console.log(message);
    } else {
      console.log("Error 500 del servidor");
    }
  };

  const obtenerTareaById = async () => {};

  const editarTareas = async (task) => {
    const result = await fetch(`../api/task/${task._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const { message, data } = await result.json();
    await obtenerTareas();

    return { data, message };
  };

  const eliminarTareas = async () => {
    const result = await fetch(`../api/task`, { method: "DELETE" });
    const { message, data } = await result.json();
    await obtenerTareas();
    return { message };
  };
  const eliminarTareaById = async (task) => {
    const result = await fetch(`../api/task/${task._id}`, {
      method: "DELETE",
    });

    await obtenerTareas();
    const { message } = await result.json();
    return { message };
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        crearTareas,
        obtenerTareas,
        obtenerTareaById,
        editarTareas,
        eliminarTareas,
        eliminarTareaById,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskContextProvider, useTask };
