import React, { useState } from "react";
import { ReactComponent as ACIcon } from "../../Assets/icon/acIcon.svg";
import styles from "./style.module.css";
import { ReactComponent as Talk } from "../../Assets/icon/talk.svg";
import { ReactComponent as Liked } from "../../Assets/icon/liked.svg";
const ReplyCard = ({ reply }) => {
  const [likeState, setLikeStatus] = useState(reply.isLike);
  function handleLikeStateChange() {
    setLikeStatus(!likeState);
  }
  return (
    <div className={styles.replyBlock}>
      <div className={styles.replyCard}>
        <div className={styles.replyCardHeader}>
          <ACIcon className={styles.icon} />
          <div>
            <div className={styles.headerTitle}>{reply.User?.name}</div>
            <div className={styles.tag}>@{reply.User?.account}</div>
          </div>
        </div>
        <div className={styles.content}> {reply.description}</div>
        <div className={styles.replyCardFooter}>{reply.createdAt}</div>
      </div>
      <div className={styles.bar}>
        <span>{reply.replies} </span>回覆
        <span>{reply.likes}</span>喜歡次數
      </div>
      <div className={styles.interact}>
        <Talk className={styles.interactIcon} />

        <Liked
          className={`${styles.interactIcon} ${
            likeState ? styles.liked : styles.unliked
          }`}
          stroke="#6C757D"
          onClick={handleLikeStateChange}
        />
      </div>
    </div>
  );
};
export default ReplyCard;
