import React from "react";
import styles from "./style.module.css";

const TweetButton = ({ text }) => {
  return (
    <span className={styles.TweetButton}>{text}</span>
  );
};
export default TweetButton;
