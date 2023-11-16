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
    password: {
      type: String,
      required: [true, "La clave es requerida"],
      trim: true,
    },
    email: {
      type: String,
      unique: [true, "El email esta duplicado, ingrese uno nuevo"],
      required: [true, "El email es requerido"],
      match: [
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        "El email no es valido",
      ],
    },
    phone: {
      type: Number,
      sparse: true, // Permite que el campo sea ausente (no tenga índice)
    },
    firstName: {
      type: String,
      maxlength: [30, "El nombre no puede tener más de 30 caracteres"],
      sparse: true, // Permite que el campo sea ausente (no tenga índice)
    },
    lastName: {
      type: String,
      maxlength: [30, "El apellido no puede tener más de 30 caracteres"],
      sparse: true, // Permite que el campo sea ausente (no tenga índice)
    },
    avatar_url: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = models.User || model("User", UserSchema);

export { User };
