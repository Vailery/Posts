import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PostList } from "./components/PostList/PostList";
import { ImageList } from "./components/ImageList/ImageList";

function App() {
  return (
    <div className="App">
      <PostList />
      <hr />
      <ImageList />
    </div>
  );
}

export default App;
