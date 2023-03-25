import React from "react";
import { ReactComponent as ACIcon } from "../../Assets/icon/acIcon.svg";
import { ReactComponent as Delete } from "../../Assets/icon/delete.svg";
import { ReactComponent as Talk } from "../../Assets/icon/talk.svg";
import { ReactComponent as Like } from "../../Assets/icon/like.svg";
import { ReactComponent as Liked } from "../../Assets/icon/liked.svg";
import styles from "./style.module.css";

const TweetItem = ({ name, tag, content, time, admin, reply, liked }) => {
  return (
    <div className={styles.card}>
      <div className={styles.tweetItem}>
        <ACIcon className={styles.ACIcon} />

        <p>{name}</p>
        <span>{tag}</span>
        <span>{time}</span>
        {admin && (
          <Delete
            className={styles.deleteIcon}
            onClick={() => console.log("delete this")}
          />
        )}
      </div>
      {reply && (
        <div className={styles.reply}>
          回覆<span>@ apple</span>
        </div>
      )}
      <div className={styles.content}>{content}</div>
      {!admin && !reply && (
        <div className={styles.interact}>
          <Talk className={styles.icon} />
          <span>13</span>
          {!liked ? (
            <Like className={styles.icon} />
          ) : (
            <Liked fill="#FC5A5A;" className={styles.liked} />
          )}
          <span>13</span>
        </div>
      )}
    </div>
  );
};
export default TweetItem;
