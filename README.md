

# 📝 Task Management App – MERN Stack Project

This is a full-stack **Task Management Application** built as part of an interview assignment.  
The project showcases my ability to build and connect both frontend and backend systems using the **MERN stack (MongoDB, Express, React, Node.js)** and demonstrates full CRUD operations.

---

## 🔗 Project Structure

```

project/
├── backend/         
├── frontend/     

````

---

## 🚀 Tech Stack

### Frontend:
- React.js
- Axios
- Tailwind CSS (with Vite@latest)
- Vite (for fast React development and bundling)

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv, CORS, express.json()

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/sahiliqubal06/task-management.git
cd task-manager
````

---

### 🔧 Backend Setup (/backend)

1. Navigate to backend and install dependencies:

```bash
cd backend
npm install
```

2. Create `.env` in `/backend`:

```
MONGO_URI=mongodb://localhost:27017/taskdb
PORT=5000
```

3. Start backend server:

```bash
npm run dev
```

* Server runs at: `http://localhost:5000/api/tasks`

---

### 💻 Frontend Setup (/frontend)

1. Navigate to frontend and install dependencies:

```bash
cd frontend
npm install
```

2. Start frontend development server:

```bash
npm run dev
```

* Frontend runs at: `http://localhost:5173`

✅ Make sure backend is also running.

---

## 🧠 Application Workflow

### 1. Create a Task

Users fill a form with:

* Task ID
* Name
* Description
* Due Date

Sends `POST` request to: `/api/tasks`

---

### 2. View All Tasks

Tasks are retrieved via:
`GET /api/tasks`

Displayed:

* Task ID, Name, Description, Due Date
* Status: pending or completed
* Remarks: ontime / before / after

---

### 3. Mark as Complete

When clicked, updates:

* `completion: true`
* `status: "completed"`
* `remarks: based on due date comparison`

Endpoint:
`PUT /api/tasks/:id`

---

### 4. Update Task

Update task fields inline using:
`PUT /api/tasks/:id`

---

### 5. Delete Task

Remove task using:
`DELETE /api/tasks/:id`

---

## 📡 API Endpoints Summary

| Method | Endpoint        | Function        |
| ------ | --------------- | --------------- |
| GET    | /api/tasks      | Fetch all tasks |
| POST   | /api/tasks      | Create task     |
| PUT    | /api/tasks/\:id | Update task     |
| DELETE | /api/tasks/\:id | Delete task     |

---

## ✅ Key Features

* Full CRUD operations
* Clean UI with Tailwind CSS
* Smart task status and remarks logic
* Inline updating
* MongoDB-based persistent storage

---

## 🙋 About the Task

This app was built as part of an **interview assignment** to demonstrate:

* MERN full-stack skills
* REST API creation
* React form & state handling
* Axios integration
* Clean modular architecture

---

## 🙌 Thank You

Thank you for reviewing my submission. I’d be happy to walk through the code or discuss improvements.
