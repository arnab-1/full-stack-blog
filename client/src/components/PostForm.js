import React, { useState, useEffect } from 'react';
import api from '../api';

const PostForm = ({ selectedPost, onFinish }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (selectedPost) {
      setTitle(selectedPost.title);
      setContent(selectedPost.content);
    }
  }, [selectedPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedPost) {
      await api.put(`/posts/${selectedPost.id}`, { title, content });
    } else {
      await api.post('/posts', { title, content });
    }
    setTitle('');
    setContent('');
    onFinish();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
      <button type="submit">{selectedPost ? 'Update' : 'Create'} Post</button>
    </form>
  );
};

export default PostForm;