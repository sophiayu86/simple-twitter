import React from "react";
import { ReactComponent as ACIcon } from "../../Assets/icon/acIcon.svg";
import styles from "./style.module.css";
import { TweetButton } from '../../Components'
const TweetCard = () => {
  return (
    <div className={styles.tweetCard}>
      <ACIcon />
      <textarea className={styles.msgBlock} rows={6} placeholder="有什麼新鮮事" />
      <div className={styles.button}>
        <TweetButton text="推文" />
      </div>
    </div>
  );
};
export default TweetCard;
