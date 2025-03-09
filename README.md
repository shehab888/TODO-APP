# Project Documentation

## 📌 Introduction
This project is a **Node.js** application built with **Express.js** for handling authentication, user management, and to-do tasks. It provides a structured API for managing users, authentication, and tasks securely.

- ## 🚀 Features
- User registration and login with JWT-based authentication.
- CRUD operations for managing to-do tasks (Create, Read, Update, Delete).
- Persistent storage of tasks and user data in MongoDB.
- Secure API endpoints with token validation.
- Modular Express.js architecture for scalability.

- ## Technologies Used
- **Node.js**: Runtime environment for server-side JavaScript.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user and task data.
- **Mongoose**: ODM library for MongoDB.
- **JWT (jsonwebtoken)**: Token-based authentication system.
- **Other Packages**:
  - `dotenv`: Environment variable management.
  - `bcryptjs` or similar: Password hashing (assumed, adjust if different).
  - `nodemon`: Development server auto-restart (optional, in devDependencies).


## 📡 API Endpoints

### 🔑 Authentication Routes
- **POST** `/auth/signin` - User login
- **POST** `/auth/signup` - User registration
- **POST** `/auth/signout` - User logout

### 👥 User Management Routes
- **GET** `/user/profile` - Get the user profile
- **PUT** `/user/update-user-profile` - Update user details
- **DELETE** `/user/delete-user` - Delete a user
- **GET** `/user/get-todos` - Get all user todos
- **GET** `/user/get-remain-todo` - Get all user todos (incomplete)

### ✅ To-Do Routes
- **GET** `/todo/getById/:id` - Get todo by id
- **POST** `/todo/add-todo` - Create a new to-do item
- **PUT** `/todo/change-status/:id` - Update a to-do item
- **DELETE** `/todo/delete-todo/:id` - Delete a to-do item

## 🔐 Authentication & Security
- Uses **JWT tokens** for securing API requests.
- Protects routes from unauthorized access.
- Hashes passwords before storing them in the database.

## Project Structure
Below is the directory layout of the TODO-APP backend service, reflecting the repository structure:

TODO-APP/
├── config/               # Configuration files
│   └── database.js       # MongoDB connection setup (assumed name)
├── controller/           # Request handlers for routes
│   ├── auth.js           # Authentication logic (register, login)
│   └── todo.js           # Task-related logic (CRUD operations)
├── middleware/           # Custom middleware
│   └── auth.js           # JWT authentication middleware
├── model/                # Mongoose schemas and models
│   ├── User.js           # User schema (e.g., email, password)
│   └── Todo.js           # Task schema (e.g., title, description)
├── routes/               # API route definitions
│   ├── auth.js           # Auth endpoints (/register, /login)
│   └── todo.js           # Task endpoints (/todo)
├── .env                  # Environment variables (not tracked in Git)
├── .gitignore            # Git ignore file (e.g., node_modules, .env)
├── app.js                # Main entry point for the Express app
├── package.json          # Project dependencies and scripts
├── package-lock.json     # Dependency lock file
└── README.md             # Project documentation
```

## 👨‍💻 Contributors
- **shehab** - Project Owner

