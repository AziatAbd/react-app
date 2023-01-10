import { useState } from "react";
import "./App.css";
import PostForm from "./components/postForm/PostForm";
import PostList from "./components/postList/PostList";

const DUMMY_POSTS = [
  {
    id: 1,
    title: "JavaScript",
    body: "Description",
  },
  {
    id: 2,
    title: "React",
    body: "Description 2",
  },
  {
    id: 3,
    title: "Next.js",
    body: "Description 3",
  },
];

function App() {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  const addPostHandler = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm onPost={addPostHandler} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
