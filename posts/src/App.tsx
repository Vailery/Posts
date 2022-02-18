import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PostList } from "./components/PostList/PostList";
import { ImageList } from "./components/ImageList/ImageList";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PostList />
        <hr />
        <ImageList />
      </Provider>
    </div>
  );
}

export default App;
