import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "El titulo es requerido"],
      unique: [true,"El titulo esta duplicado, ingrese uno nuevo"],
      trim: true,
      maxlength: [40, "title cannot be grater than 40 characters"],
    },
    description: {
      type: String,
      required: [true, "La descripcion es requerida"],
      trim: true,
      maxlength: [200, "title cannot be grater than 200 characters"],
    },
    authorId: {
      type: Schema.Types.ObjectId,
      required: [true, "EL autor es requerido"],
    },
    status: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Task = models.Task || model("Task", TaskSchema);

export { Task };
