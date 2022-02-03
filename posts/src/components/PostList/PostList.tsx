import { useEffect, useState } from "react";
import { Post } from "../Post/Post";
import styles from "./PostList.module.css";

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);

  const showMore = () => {
    setCounter((counter) => counter + 5);
  };

  return (
    <div>
      <div className={styles.main}>
        {posts.slice(0, counter).map((item) => (
          <Post item={item} />
        ))}
      </div>

      {counter !== posts.length ? (
        <button className={styles.showButton} onClick={showMore}>
          Show more
        </button>
      ) : null}
    </div>
  );
};
