import { connect, connection } from "mongoose";

const conn = { isConnected: false };

const connectDB = async () => {
  if (conn.isConnected) return;
  const db = await connect(process.env.DATABASE_URL);
  conn.isConnected = db.connections[0].readyState;
  console.log("Base de datos conectada: ", db.connection.name);
};

connection.on("connected", () => {
  console.log("Base de datos conectada");
});

connection.on("error", (err) => {
  console.log("Error al intentar conectar la base de datos conectada: ", err.message);
});

export { connectDB };
