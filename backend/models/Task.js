import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  taskid: String,
  name: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
  dueDate: Date,
  completion: { type: Boolean, default: false },
  status: { type: String, default: "pending" },
  remarks: { type: String, default: "" },
});

export default mongoose.model("Task", taskSchema);
