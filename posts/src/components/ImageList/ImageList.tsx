import { useEffect, useState } from "react";
import { Image } from "../Image/Image";
import styles from "./ImageList.module.css";

export const ImageList = () => {
  const [posts, setPosts] = useState([]);
  const counter = 12;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);

  return (
    <div className={styles.main}>
      {posts.slice(0, counter).map((item) => (
        <Image item={item} key={"id" + Math.random().toString(16).slice(2)} />
      ))}
    </div>
  );
};
