import React from 'react';
import BlogPostForm from './BlogPostForm';
import BlogPostList from './BlogPostList';

function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <BlogPostForm />
      <BlogPostList />
    </div>
  );
}

export default Blog;
