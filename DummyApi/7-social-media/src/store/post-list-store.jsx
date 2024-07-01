

import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const PostsListContext = createContext({
  postsList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts:() =>{},
});

const postsListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
      case 'ADD_INITIAL_POSTS':
      return [...state, ...action.payload];
    case 'DELETE_POST':
      return state.filter(post => post.id !== action.payload);
    default:
      return state;
  }
};

const PostsListProvider = ({ children }) => {
  const [postsList, dispatch] = useReducer(postsListReducer, []);

  const addPost = (userId, title, body, reactions, tags) => {
    const newPost = {
      id: (postsList.length + 1).toString(),
      userId,
      title,
      body,
      reactions: Number(reactions),
      tags,
    };
    dispatch({ type: 'ADD_POST', payload: newPost });
  };
  const addInitialPosts = (posts) => {
    dispatch({ type: 'ADD_INITIAL_POSTS', payload: posts });
  };

  const deletePost = (postId) => {
    dispatch({ type: 'DELETE_POST', payload: postId });
  };

  return (
    <PostsListContext.Provider value={{ postsList, addInitialPosts, addPost, deletePost }}>
      {children}
    </PostsListContext.Provider>
  );
};

PostsListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostsListProvider;
