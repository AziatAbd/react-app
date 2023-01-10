import { useState } from "react";
import "./App.css";
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

  return (
    <div className="App">
    <PostList />
    </div>
  );
}

export default App;
