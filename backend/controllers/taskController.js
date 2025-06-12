import Task from "../models/Task.js";

const getRemarks = (dueDate, completedDate) => {
  const due = new Date(dueDate);
  const completed = new Date(completedDate);
  if (completed.toDateString() === due.toDateString()) return "ontime";
  return completed > due ? "after" : "before";
};

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  Object.assign(task, req.body);
  if (task.completion) {
    task.status = "completed";
    task.remarks = getRemarks(task.dueDate, new Date());
  }
  await task.save();
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
