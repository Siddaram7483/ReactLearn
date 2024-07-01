// // import propTypes from "prop-types";
// // import { createContext, useReducer } from "react";
// // import PostsList  from "../components/PostsList";

// //  export const PostsList = createContext({
// //   postsList: [],
// //   addPost: () => {},
// //   deletePost: () => {},
// // });

// // const postsListReducer = (currPostsList, action) => {
// //   return currPostsList;
// // };

// // const PostsListProvider = ({ Children }) => {
// //   const [postsList, dispatchPostsList] = useReducer(
// //     postsListReducer,
// //     DEFAULT_POST_LIST
// //   );

// //   const addPost = () => {};
// //   const deletePost = () => {};

// //   return (
// //     <PostsList.Provider value={{ postsList, addPost, deletePost }}>
// //       {Children}
// //     </PostsList.Provider>
// //   );
// // };

// // PostsListProvider.propTypes = {
// //   Children: propTypes.node.isRequired,
// // };

// // const DEFAULT_POST_LIST = [
// //   {
// //     id: "1",
// //     title: "Going To Mumbai",
// //     body: "Heyy, frnds how r u? i am going to banglore for my work ,peace out",
// //     reactions: 1,
// //     userId: "user-3",
// //     tags: ["vacation", "Bengaluru", "work"],
// //   },
// //   {
// //     id: "1",
// //     title: "Passed engineering",
// //     body: "Heyy, frnds how r u? i am going to banglore for my work  beacause i selected for mnc company hehe,peace out",
// //     reactions: 140,
// //     userId: "user-9",
// //     tags: ["Graduated", "Bengaluru", "work", "Unbelievable"],
// //   },
// // ];

// // export default PostsListProvider;

// // // import PropTypes from "prop-types";
// // // import { createContext, useReducer } from "react";

// // // const PostsListContext = createContext({
// // //   postsList: [],
// // //   addPost: () => {},
// // //   deletePost: () => {},
// // // });

// // // const postsListReducer = (state, action) => {
// // //   switch (action.type) {
// // //     case 'ADD_POST':
// // //       return [...state, action.payload];
// // //     case 'DELETE_POST':
// // //       return state.filter(post => post.id !== action.payload);
// // //     default:
// // //       return state;
// // //   }
// // // };

// // // const PostsListProvider = ({ children }) => {
// // //   const [postsList, dispatchPostsList] = useReducer(postsListReducer, []);

// // //   const addPost = (post) => {
// // //     dispatchPostsList({ type: 'ADD_POST', payload: post });
// // //   };

// // //   const deletePost = (postId) => {
// // //     dispatchPostsList({ type: 'DELETE_POST', payload: postId });
// // //   };

// // //   return (
// // //     <PostsListContext.Provider
// // //       value={{ postsList, addPost, deletePost }}
// // //     >
// // //       {children}
// // //     </PostsListContext.Provider>
// // //   );
// // // };

// // // PostsListProvider.propTypes = {
// // //   children: PropTypes.node.isRequired,
// // // };

// // // export default PostsListProvider;

// // post-list-store.js
// import  { createContext, useReducer } from 'react';
// import PropTypes from 'prop-types';

// export const PostsListContext = createContext({
//   postsList: [],
//   addPost: () => {},
//   deletePost: () => {},
// });

// const postsListReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_POST':
//       return [...state, action.payload];
//     case 'DELETE_POST':
//       return state.filter(post => post.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const DEFAULT_POST_LIST = [
//   {
//     id: '1',
//     title: 'Going To Mumbai',
//     body: 'Heyy, frnds how r u? I am going to Bangalore for my work, peace out.',
//     reactions: 128,
//     userId: 'user-3',
//     tags: ['vacation', 'Bangalore', 'work'],
//   },
//   {
//     id: '2',
//     title: 'Passed Engineering',
//     body: 'Heyy, frnds how r u? I got selected for an MNC in Bangalore, peace out.',
//     reactions: 140,
//     userId: 'user-9',
//     tags: ['Graduated', 'Bangalore', 'work', 'Unbelievable'],
//   },
// ];

// const PostsListProvider = ({ children }) => {
//   const [postsList, dispatch] = useReducer(postsListReducer, DEFAULT_POST_LIST);

//   const addPost = (userId,Title,Body,reactions,tags,newPost) => {
//     console.log(`${userId},${Title},${Body},${reactions},${tags}`);
//     dispatch({ type: 'ADD_POST', payload: newPost });
//   };

//   const deletePost = (postId) => {
//     dispatch({ type: 'DELETE_POST', payload: postId });
//   };

//   return (
//     <PostsListContext.Provider value={{ postsList, addPost, deletePost }}>
//       {children}
//     </PostsListContext.Provider>
//   );
// };

// PostsListProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default PostsListProvider;

import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const PostsListContext = createContext({
  postsList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postsListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    case 'DELETE_POST':
      return state.filter(post => post.id !== action.payload);
    default:
      return state;
  }
};

const DEFAULT_POST_LIST = [
  {
    id: '1',
    title: 'Going To Mumbai',
    body: 'Heyy, frnds how r u? I am going to Bangalore for my work, peace out.',
    reactions: 128,
    userId: 'user-3',
    tags: ['vacation', 'Bangalore', 'work'],
  },
  {
    id: '2',
    title: 'Passed Engineering',
    body: 'Heyy, frnds how r u? I got selected for an MNC in Bangalore, peace out.',
    reactions: 140,
    userId: 'user-9',
    tags: ['Graduated', 'Bangalore', 'work', 'Unbelievable'],
  },
];

const PostsListProvider = ({ children }) => {
  const [postsList, dispatch] = useReducer(postsListReducer, DEFAULT_POST_LIST);

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

  const deletePost = (postId) => {
    dispatch({ type: 'DELETE_POST', payload: postId });
  };

  return (
    <PostsListContext.Provider value={{ postsList, addPost, deletePost }}>
      {children}
    </PostsListContext.Provider>
  );
};

PostsListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostsListProvider;
