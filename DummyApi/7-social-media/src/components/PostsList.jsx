import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Posts from "./Posts";
import { PostsListContext } from "../store/post-list-store";
import WelcomeMssg from "./WelcomeMssg";
import LoadingSpinner from "./LoadingSpinner";

const PostsList = () => {
  const { postsList, addInitialPosts } = useContext(PostsListContext);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (!fetching && postsList.length === 0) {
      setFetching(true);
      const controller = new AbortController();
      const signal = controller.signal;
      
      fetch("https://dummyjson.com/posts", { signal })
        .then((res) => res.json())
        .then((data) => {
          const transformedPosts = data.posts.map((post) => ({
            id: uuidv4(), // Generate a unique ID for each post
            userId: post.userId ? post.userId.toString() : uuidv4(),
            title: post.title,
            body: post.body,
            reactions: Number(post.reactions),
            tags: post.tags || [],
          }));
          addInitialPosts(transformedPosts);
          setFetching(false);
        })
        .catch(() => {
          setFetching(false);
        });

      return () => {
        console.log("cleaning up useEffect");
        controller.abort();
      };
    }
  }, [fetching, addInitialPosts, postsList.length]);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {postsList.length === 0 && !fetching && <WelcomeMssg />}
      <div className="posts-list">
        {postsList.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostsList;
