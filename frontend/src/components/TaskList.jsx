import { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const loadTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  };

  const markComplete = async (id) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, {
      completion: true,
    });
    loadTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    loadTasks();
  };

  const handleEditChange = (e) => {
    setEditTask({ ...editTask, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:5000/api/tasks/${editTask._id}`,
      editTask
    );
    setEditTask(null);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task._id} className="border p-4 rounded shadow">
          <h4 className="font-semibold text-lg">
            {task.name} ({task.taskid})
          </h4>
          <p>{task.description}</p>
          <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
          <p>Status: {task.status}</p>
          <p>Remarks: {task.remarks}</p>
          <div className="mt-2 space-x-2">
            {!task.completion && (
              <button
                onClick={() => markComplete(task._id)}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                Mark as Complete
              </button>
            )}
            <button
              onClick={() => setEditTask(task)}
              className="bg-yellow-500 text-white px-2 py-1 rounded"
            >
              Update
            </button>
            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {editTask && (
        <form
          onSubmit={handleEditSubmit}
          className="mt-6 p-4 border rounded shadow bg-gray-50"
        >
          <h3 className="text-lg font-semibold mb-3">Update Task</h3>
          <input
            name="name"
            value={editTask.name}
            onChange={handleEditChange}
            className="w-full border p-2 rounded mb-2"
            placeholder="Name"
          />
          <input
            name="description"
            value={editTask.description}
            onChange={handleEditChange}
            className="w-full border p-2 rounded mb-2"
            placeholder="Description"
          />
          <input
            type="date"
            name="dueDate"
            value={editTask.dueDate?.slice(0, 10)}
            onChange={handleEditChange}
            className="w-full border p-2 rounded mb-2"
          />
          <div className="flex space-x-2 mt-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEditTask(null)}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TaskList;
