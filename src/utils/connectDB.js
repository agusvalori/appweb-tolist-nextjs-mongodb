import { connect, connection } from "mongoose";

const conn = { isConnected: false };

const connectDB = async () => {
  if (conn.isConnected) return;
  const { DATABASE_URL } = process.env;

  const db = await connect(DATABASE_URL);
  conn.isConnected = db.connections[0].readyState;
  console.log("Base de datos conectada: ", db.connection.name);
};

connection.on("connected", () => {
  console.log("Base de datos conectada");
});

connection.on("error", (err) => {
  console.log(
    "Error al intentar conectar la base de datos: ",
    err.message
  );
});

export { connectDB };
