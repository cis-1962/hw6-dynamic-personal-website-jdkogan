import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BlogPostType, RootState } from '../types/types';

interface BlogState {
  posts: BlogPostType[];
  nextPostId: number;
}

const initialState: BlogState = {
  posts: [],
  nextPostId: 1,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addBlogPost: (state, action: PayloadAction<Omit<BlogPostType, 'id'>>) => {
      const newPost = { ...action.payload, id: state.nextPostId };
      state.posts.push(newPost);
      state.nextPostId += 1;
    },
    editBlogPost: (state, action: PayloadAction<BlogPostType>) => {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id,
      );
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    deleteBlogPost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addBlogPost, editBlogPost, deleteBlogPost } = blogSlice.actions;

export const selectAllBlogPosts = (state: RootState) => state.blog.posts;

export default blogSlice.reducer;
