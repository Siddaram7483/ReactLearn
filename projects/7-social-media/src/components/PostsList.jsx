// PostsList.js
import { useContext } from 'react';
import Posts from './Posts';
import { PostsListContext } from '../store/post-list-store';


const PostsList = () => {
  const { postsList } = useContext(PostsListContext);

  return (
    <>
    
    <div className="posts-list">
      {postsList.map(post => (
        <Posts key={post.id} post={post} />
      ))}
    </div>
    </>
  );
};

export default PostsList;
