import { useEffect, useState } from "react";
import { Post } from "../Post/Post";
import styles from "./PostList.module.css";

export interface IPost {
  id: string;
  userId: string;
  body: string;
  title: string;
}

export interface IPostWithAuthor extends IPost {
  author: string;
}

const POST_PER_PAGE = 5;

export const PostList = () => {
  const [posts, setPosts] = useState<IPostWithAuthor[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
    ]).then((response) => {
      const [posts, authors] = response;

      const newPosts = posts.map((item: IPost) => {
        const authorId = item.userId;

        const author = authors.find(
          (author: { id: string }) => author.id === authorId
        );

        return { ...item, author: author.name };
      });

      setPosts(newPosts);
    });
  }, []);

  const showMore = () => {
    setPage(page + 1);
  };

  const postSliced = posts.slice(0, POST_PER_PAGE * page);

  return (
    <div>
      <div className={styles.main}>
        {postSliced.map((item) => (
          <Post item={item} />
        ))}
      </div>

      {postSliced.length !== posts.length ? (
        <button className={styles.showButton} onClick={showMore}>
          Show more
        </button>
      ) : null}
    </div>
  );
};
