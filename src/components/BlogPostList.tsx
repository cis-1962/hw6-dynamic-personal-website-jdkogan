import React, { SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllBlogPosts } from '../features/blogSlice';
import EditPostForm from './EditPostForm';

function BlogPostList() {
  const blogPosts = useSelector(selectAllBlogPosts);
  const [editingPostId, setEditingPostId] = useState<null | number>(null);

  const handleEditPost = (postId: number) => {
    setEditingPostId(postId);
  };

  const handleCancelEdit = () => {
    setEditingPostId(null);
  };

  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <div className="main">
      <h2>Blog Posts</h2>
      {blogPosts.map((post) => (
        <div key={post.id} className="post-container">
          <div className="post-id">
            <span>ID: {post.id}</span>
          </div>
          {editingPostId === post.id ? (
            <EditPostForm post={post} onCancel={handleCancelEdit} />
          ) : (
            <div className="post-content">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="image"
                  onError={handleImageError}
                />
              )}
              <button
                className="button"
                type="button"
                onClick={() => handleEditPost(post.id)}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default BlogPostList;
