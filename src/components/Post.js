import React from "react";
import Card from "./Card";
import styles from "./Post.module.css";
export default function Post({ data, onClick }) {
  return (
    <Card>
      <img
        onClick={onClick}
        className={styles.img}
        src={data.photoUrl}
        alt={data.id}
      />
    </Card>
  );
}
