# Project Documentation

## 📌 Introduction
This project is a **Node.js** application built with **Express.js** for handling authentication, user management, and to-do tasks. It provides a structured API for managing users, authentication, and tasks securely.

## 🚀 Features
- User authentication (Login, Signup, JWT-based authentication)
- Task management (CRUD operations)
- Secure API with token validation
- Organized MVC structure

## 📡 API Endpoints

### 🔑 Authentication Routes
- **POST** `/auth/login` - User login
- **POST** `/auth/register` - User registration
- **POST** `/auth/logout` - User logout
- **GET** `/auth/me` - Get logged-in user details

### 👥 User Management Routes
- **GET** `/users` - Get all users
- **GET** `/users/:id` - Get a single user by ID
- **PUT** `/users/:id` - Update user details
- **DELETE** `/users/:id` - Delete a user

### ✅ To-Do Routes
- **GET** `/todos` - Get all to-do items
- **POST** `/todos` - Create a new to-do item
- **PUT** `/todos/:id` - Update a to-do item
- **DELETE** `/todos/:id` - Delete a to-do item

## 🔐 Authentication & Security
- Uses **JWT tokens** for securing API requests.
- Protects routes from unauthorized access.
- Hashes passwords before storing them in the database.

## 🏗️ Project Structure
```
/controllers     # Handles request logic
/routes         # Defines API routes
/models        # Defines database models
/middleware    # Contains authentication & validation logic
/config       # Environment configurations
```

## 👨‍💻 Contributors
- **shehab** - Project Owner

