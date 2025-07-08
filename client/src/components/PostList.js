import React, { useEffect, useState } from 'react';
import api from '../api';
import PostForm from './PostForm';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const fetchPosts = async () => {
    const res = await api.get('/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    await api.delete(`/posts/${id}`);
    fetchPosts();
  };

  return (
    <div>
      <h2>Blog Posts</h2>
      <PostForm selectedPost={editingPost} onFinish={() => {
        setEditingPost(null);
        fetchPosts();
      }} />
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => setEditingPost(post)}>Edit</button>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;