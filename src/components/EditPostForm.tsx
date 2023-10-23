import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBlogPost, deleteBlogPost } from '../features/blogSlice';
import { BlogPostType } from '../types/types';

interface EditPostFormProps {
  post: BlogPostType;
  onCancel: () => void;
}

function EditPostForm({ post, onCancel }: EditPostFormProps) {
  const dispatch = useDispatch();
  const [editedPost, setEditedPost] = useState(post);

  const handleSave = () => {
    dispatch(editBlogPost(editedPost));
    onCancel();
  };

  const handleDelete = () => {
    dispatch(deleteBlogPost(post.id));
    onCancel();
  };

  return (
    <div className="main">
      <h2>Edit Post</h2>
      <div>
        <label className="label" htmlFor="title">
          Title:
        </label>
        <input
          className="input"
          type="text"
          id="title"
          value={editedPost.title}
          onChange={(e) =>
            setEditedPost({ ...editedPost, title: e.target.value })
          }
        />
      </div>
      <div>
        <label className="label" htmlFor="content">
          Content:
        </label>
        <textarea
          className="textarea"
          id="content"
          value={editedPost.content}
          onChange={(e) =>
            setEditedPost({ ...editedPost, content: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          className="input"
          type="text"
          id="imageUrl"
          value={editedPost.imageUrl}
          onChange={(e) =>
            setEditedPost({ ...editedPost, imageUrl: e.target.value })
          }
        />
      </div>
      <button className="button" type="button" onClick={handleSave}>
        Save
      </button>
      <button className="button" type="button" onClick={handleDelete}>
        Delete
      </button>
      <button className="button" type="button" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
}

export default EditPostForm;
