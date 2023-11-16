import { NextResponse } from "next/server";
import { User } from "../../../../models/User";
import { connectDB } from "../../../../utils/connectDB";


const POST = async (request) => {
  try {
    const reqBody = await request.json();
    if (!reqBody) {
      return NextResponse.json(
        {
          message: "Campos vacios",
          data: null,
        },
        { status: 204 }
      );
    }
    const {
      username,
      password,
      email,
      phone,
      firstName,
      lastName,
      avatar_url,
    } = reqBody;

    connectDB();
    const newUser = await new User({
      username,
      password,
      email,
      phone,
      firstName,
      lastName,
      avatar_url,
    });

    await newUser.save();
    return NextResponse.json({
      message: "El usuario se registro correctamente",
      data: null,
    });
  } catch (error) {
    console.log(error);
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
      { message: "Error al crear el usuario: " + error.message, data: null },
      { status: 400 }
    );
  }
};

export { POST };
