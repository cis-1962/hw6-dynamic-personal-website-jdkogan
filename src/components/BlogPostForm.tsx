import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlogPost } from '../features/blogSlice';

function BlogPostForm() {
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState({
    id: Math.random(), // Ideally this should be handled by a backend service
    title: '',
    content: '',
    imageUrl: '',
  });

  const handleAddPost = () => {
    dispatch(addBlogPost(newPost));
    setNewPost({ id: Math.random(), title: '', content: '', imageUrl: '' });
  };

  return (
    <div className="main">
      <h2>Add a New Blog Post</h2>
      <div>
        <label className="label" htmlFor="title">
          Title:
        </label>
        <input
          className="input"
          type="text"
          id="title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
      </div>
      <div>
        <label className="label" htmlFor="content">
          Content:
        </label>
        <textarea
          className="textarea"
          id="content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
      </div>
      <div>
        <label className="label" htmlFor="imageUrl">
          Image URL:
        </label>
        <input
          className="input"
          type="text"
          id="imageUrl"
          value={newPost.imageUrl}
          onChange={(e) => setNewPost({ ...newPost, imageUrl: e.target.value })}
        />
      </div>
      <button className="button" type="button" onClick={handleAddPost}>
        Add Post
      </button>
    </div>
  );
}

export default BlogPostForm;
