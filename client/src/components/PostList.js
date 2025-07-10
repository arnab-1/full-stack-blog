import React, { useEffect, useState } from 'react';
import api from '../api';
import PostForm from './PostForm';

// PostList component displays the list of blog posts and allows editing/deleting
const PostList = () => {
  // State to hold all posts
  const [posts, setPosts] = useState([]);
  // State to hold the post being edited
  const [editingPost, setEditingPost] = useState(null);

  // Fetch all posts from the backend API
  const fetchPosts = async () => {
    const res = await api.get('/posts');
    setPosts(res.data);
  };

  // Fetch posts when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  // Delete a post by id and refresh the list
  const deletePost = async (id) => {
    await api.delete(`/posts/${id}`);
    fetchPosts();
  };

  return (
    <div>
      <h2>Blog Posts</h2>
      {/* PostForm is used for creating or editing a post */}
      <PostForm selectedPost={editingPost} onFinish={() => {
        setEditingPost(null);
        fetchPosts();
      }} />
      {/* Render each post with Edit and Delete buttons */}
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