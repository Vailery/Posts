import styles from "./Post.module.css";

interface IProps {
  item: {
    body: string;
    title: string;
  };
}

export const Post = ({ item }: IProps) => {
  return (
    <div className={styles.main}>
      <h2>{item.body}</h2>
      <p>{item.title}</p>
    </div>
  );
};
