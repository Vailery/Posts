import styles from "./Post.module.css";
import { IPostWithAuthor } from "../../redux/reducers/postsReducer";

interface IProps {
  item: IPostWithAuthor;
}

export const Post = ({ item }: IProps) => {
  return (
    <div className={styles.main}>
      <h2>{item.body}</h2>
      <p>{item.title}</p>
      <p className={styles.author}>
        Author: <a href="#">{item.author}</a>
      </p>
    </div>
  );
};
