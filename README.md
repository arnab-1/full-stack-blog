# 📝 Full Stack Blog - Code Flow Summary

This is a full-stack blog application using **React (frontend)**, **Express (backend)**, and **MySQL (database)**.

---

## 🚀 Cloning and Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/arnab-1/full-stack-blog.git
cd full-stack-blog

# 2. Setup backend
cd server
npm install
# Configure your .env file with MySQL credentials
cp .env.example .env
# Example .env values:
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=yourpassword
# DB_NAME=blogdb
npm start

# 3. Setup frontend
cd ../client
npm install
npm start
```

Make sure you have MySQL running and a database named `blogdb` created before starting the server.

---

## 🧭 Project Structure

```
.
├── client/               # React frontend
│   └── src/
│       ├── components/   # UI components (PostForm, PostList)
│       ├── api.js        # Axios instance
│       ├── App.js        # Main component
│       └── index.js
├── server/               # Express backend
│   ├── controllers/      # SQL logic handlers
│   ├── models/           # DB connection
│   ├── routes/           # Express routes
│   └── index.js          # Server entry point
├── .env                  # Environment variables
```

---

## 🎨 Frontend (React)

### `client/src/api.js`
- Axios instance with base URL:
  ```js
  axios.create({ baseURL: 'http://localhost:5000' })
  ```

### `client/src/App.js`
- Main component.
- Renders:
  ```jsx
  <h1>Blog App</h1>
  <PostList />
  ```

### `client/src/components/PostList.js`
- Fetches all posts (`GET /posts`).
- Renders list with **Edit** and **Delete** buttons.
- Deletes posts (`DELETE /posts/:id`).
- Passes selected post to `<PostForm />`.

### `client/src/components/PostForm.js`
- Controlled form with `title` and `content`.
- If editing, fills inputs and sends `PUT /posts/:id`.
- If creating, sends `POST /posts`.
- After submission, calls `onFinish()` to refresh list.

---

## 🔧 Backend (Express + MySQL)

### `server/index.js`
- Sets up Express, CORS, and JSON middleware.
- Loads `.env` variables.
- Mounts routes at `/posts`.
- Starts server on port `5000`.

### `server/routes/postRoutes.js`
Defines CRUD API endpoints:
| Method | Route         | Action            |
|--------|---------------|-------------------|
| GET    | `/posts`      | Get all posts     |
| GET    | `/posts/:id`  | Get post by ID    |
| POST   | `/posts`      | Create post       |
| PUT    | `/posts/:id`  | Update post       |
| DELETE | `/posts/:id`  | Delete post       |

### `server/controllers/postController.js`
Handles SQL operations using `mysql2`:
- Uses queries like `SELECT`, `INSERT`, `UPDATE`, `DELETE` on the `posts` table.
- Returns results or errors as JSON.

### `server/models/db.js`
- Connects to MySQL using `.env` config:
  ```env
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=yourpassword
  DB_NAME=blogdb
  ```

---

## 🔁 Data Flow Summary

1. User visits frontend → `PostList` fetches posts from backend.
2. User creates/edits post → `PostForm` sends POST/PUT request.
3. Backend updates MySQL DB → returns updated post list.
4. UI refreshes with changes.
