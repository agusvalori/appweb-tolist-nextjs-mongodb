import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "El nombre de usuario es requerido"],
      unique: [true, "El nombre de usuario esta duplicado, ingrese uno nuevo"],
      trim: true,
      minlength: [3, "El nombre de usuario debe tener al menos 3 caracteres"],
      maxlength: [
        20,
        "El nombre de usuario no puede tener más de 20 caracteres",
      ],
    },
    password: { type: String, required: true, trim: true },
    email: { type: String },
    phone: { type: Number },
    firstName: {
      type: String,
      maxlength: [30, "El nombre no puede tener más de 30 caracteres"],
    },
    lastName: {
      type: String,
      maxlength: [30, "El apellido no puede tener más de 30 caracteres"],
    },
    avatar: {
      avatar_url: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = models.User || model("User", UserSchema);

export { User };
