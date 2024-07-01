


import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";
import { useContext } from "react";
import { PostsListContext } from "../store/post-list-store";

const Posts = ({ post }) => {
  const { deletePost } = useContext(PostsListContext);
  return (
    <div className="card posts-card" style={{ width: "38rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reactions}
            <MdDelete
              onClick={() => deletePost(post.id)}
              style={{ cursor: "pointer" }}
            />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span key={index} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This is my post and it has been reacted by over {post.reactions} people in just 1 to 2 hours.
        </div>
      </div>
    </div>
  );
};

Posts.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    reactions: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Posts;
