// Defining the shape of the state for the introduction feature
export type IntroductionState = {
  imgUrl: string;
  description: string;
};

// Defining the shape of individual blog posts
export type BlogPostType = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
};

// Defining the shape of the entire Redux store state
export type RootState = {
  introduction: IntroductionState;
  blog: { posts: BlogPostType[] }; // Adjusted to match the blogSlice state structure
};
