import db from '../models/db.js';

export const getPosts = (req, res) => {
  db.query('SELECT * FROM posts', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

export const getPostById = (req, res) => {
  db.query('SELECT * FROM posts WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

export const createPost = (req, res) => {
  const { title, content } = req.body;
  db.query('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: results.insertId, title, content });
  });
};

export const updatePost = (req, res) => {
  const { title, content } = req.body;
  db.query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: req.params.id, title, content });
  });
};

export const deletePost = (req, res) => {
  db.query('DELETE FROM posts WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true });
  });
};