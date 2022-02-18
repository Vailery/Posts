import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../../redux/actions/postsActions";
import { IPost } from "../../redux/reducers/postsReducer";
import { IState } from "../../redux/store";
import { Post } from "../Post/Post";
import styles from "./PostList.module.css";

const POST_PER_PAGE = 5;

export const PostList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const posts = useSelector((state: IState) => state.postsReducer.posts);

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

      dispatch(addPosts(newPosts));
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
          <Post item={item} key={"id" + Math.random().toString(16).slice(2)} />
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
function newPosts(newPosts: any): { type: string; mas: string[] } {
  throw new Error("Function not implemented.");
}
