"""
📝 BLOG_FULL_STACK

A full-stack blog application built using React, Node.js, Express, and MySQL. Users can create, read, update, and delete blog posts through a modern frontend and RESTful backend.
```
BLOG_FULL_STACK/
├── client/                  # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── api.js
│       ├── App.js
│       └── index.js
├── server/                  # Express + MySQL backend
│   ├── controllers/
│   ├── models/
│   │   ├── db.js
│   │   └── sql_schema.sql
│   ├── routes/
│   │   └── postRoutes.js
│   ├── index.js
│   └── package.json
├── .env
├── .gitignore
├── package.json
└── README.md

🚀 Features

- ⚛️ Frontend built with React
- 📡 RESTful API built with Express.js
- 🗃️ MySQL database integration
- 📁 Clean folder structure (MVC)
- 🔐 Environment variable support via `.env`
- 🌐 API routing for CRUD operations
```
---

🛠️ Setup Instructions

1. Clone the Repository

git clone https://github.com/arnab-1/blog_full_stack.git
cd blog_full_stack

2. Install Dependencies

# Frontend
cd client
npm install

# Backend
cd ../server
npm install

3. Set Up Environment Variables

Create a .env file inside /server:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=blog_db
PORT=5000

▶️ Run the App

# Start Backend
cd server
node index.js

# Start Frontend
cd client
npm start

---

📡 API Endpoints

Base URL: /api/posts

| Method | Endpoint     | Description         | Request Body           |
|--------|--------------|---------------------|------------------------|
| GET    | /            | Get all blog posts  | —                      |
| GET    | /:id         | Get a post by ID    | —                      |
| POST   | /            | Create a new post   | { title, content }     |
| PUT    | /:id         | Update a post       | { title?, content? }   |
| DELETE | /:id         | Delete a post       | —                      |

📝 Example POST Body

{
  "title": "My First Blog",
  "content": "This is the content of my first blog post."
}

---

📄 .env Example

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password123
DB_NAME=blog_db
PORT=5000

🙋 Author

👨‍💻 Developed by Arnab Chakraborty
🌐 GitHub: github.com/arnab-1

📄 License

This project is licensed under the MIT License.
"""
