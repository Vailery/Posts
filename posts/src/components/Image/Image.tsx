import { useState } from "react";
import styles from "./Image.module.css";

interface IProps {
  item: {
    thumbnailUrl: string;
    title: string;
  };
}

export const Image = ({ item }: IProps) => {
  const [toggle, setToggle] = useState(false);

  const increaseSizeOfImage = (event: any) => {
    event.target.classList.toggle(styles.active);
    setToggle(!toggle);
  };

  return (
    <div className={styles.main}>
      <img
        src={item.thumbnailUrl}
        alt="albumImage"
        onClick={increaseSizeOfImage}
      />
      <p>{item.title}</p>
    </div>
  );
};
