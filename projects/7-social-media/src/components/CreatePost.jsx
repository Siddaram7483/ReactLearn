

// export default CreatePost;
// import { useContext, useRef } from "react";
// import { PostsListContext } from "../store/post-list-store";

// const CreatePost = () => {
//   const { addPost } = useContext(PostsListContext);

//   const userIdElement = useRef();
//   const titleElement = useRef();
//   const bodyElement = useRef();
//   const reactionsElement = useRef();
//   const tagsElement = useRef();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const userId = userIdElement.current.value;
//     const title = titleElement.current.value;
//     const body = bodyElement.current.value;
//     const reactions = reactionsElement.current.value;
//     const tags = tagsElement.current.value.split(/\s+/);
//     addPost(userId, title, body, reactions, tags);
//   };

//   return (
//     <form className="create-post" onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="UserId" className="form-label">Enter your User Id here</label>
//         <input type="text" ref={userIdElement} className="form-control" id="UserId" placeholder="Your User Id" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="title" className="form-label">Post Title</label>
//         <input type="text" ref={titleElement} className="form-control" id="title" placeholder="How are you feeling today...." />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="tags" className="form-label">Enter your tags</label>
//         <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Post your tags separated by space" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="reactions" className="form-label">Number of reactions by Viewers</label>
//         <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="How many people reacted to this post" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="body" className="form-label">Post Content</label>
//         <textarea rows={6} ref={bodyElement} className="form-control" id="body" placeholder="Tell us more about it"></textarea>
//       </div>
//       <button type="submit" className="btn btn-primary">Post</button>
//     </form>
//   );
// };

// export default CreatePost;
import { useContext, useRef } from "react";
import { PostsListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostsListContext);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(/\s+/);

    // Ensure fields are not empty
    if (!userId || !title || !body || !reactions || !tags) {
      alert("Please fill in all the fields");
      return;
    }

    addPost(userId, title, body, reactions, tags);

    // Clear the form after submission
    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">Enter your User Id here</label>
        <input type="text" ref={userIdElement} className="form-control" id="UserId" placeholder="Your User Id" />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" ref={titleElement} className="form-control" id="title" placeholder="How are you feeling today...." />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter your tags</label>
        <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Post your tags separated by space" />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of reactions by Viewers</label>
        <input type="number" ref={reactionsElement} className="form-control" id="reactions" placeholder="How many people reacted to this post" />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea rows={6} ref={bodyElement} className="form-control" id="body" placeholder="Tell us more about it"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  );
};

export default CreatePost;
