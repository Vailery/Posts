import { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import styles from "./Image.module.css";

interface IProps {
  item: {
    thumbnailUrl: string;
    title: string;
  };
}

export const Image = ({ item }: IProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.main}>
      <img
        src={item.thumbnailUrl}
        alt="albumImage"
        onClick={() => setToggle(!toggle)}
        className={toggle ? styles.active : undefined}
      />
      <p>{item.title}</p>
    </div>
  );
};
