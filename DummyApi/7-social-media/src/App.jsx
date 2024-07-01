import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
// import Posts from "./components/Posts";
import PostsList from "./components/PostsList";
import { useState } from "react";
import PostsListProvider from "./store/post-list-store";
// import { Outlet } from "react-router-dom";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostsListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {/* <Outlet/> */}
          {selectedTab === "Home" ? (
            <PostsList></PostsList>
          ) : (
            <CreatePost></CreatePost>
            
          )}
          <Footer />
        </div>
      </div>
    </PostsListProvider>
  );
};

export default App;
