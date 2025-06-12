import { useState } from "react";
import axios from "axios";

const TaskForm = () => {
  const [task, setTask] = useState({
    taskid: "",
    name: "",
    description: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/tasks", task);
      setTask({ taskid: "", name: "", description: "", dueDate: "" });
    } catch (err) {
      alert("Error creating task");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mb-6">
      <input
        name="taskid"
        placeholder="Task ID"
        onChange={handleChange}
        value={task.taskid}
        required
        className="w-full border p-2 rounded"
      />
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={task.name}
        required
        className="w-full border p-2 rounded"
      />
      <input
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={task.description}
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="date"
        name="dueDate"
        onChange={handleChange}
        value={task.dueDate}
        required
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
