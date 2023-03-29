import React, { useState } from 'react';
import styles from './style.module.css';
import { ReactComponent as Liked } from '../../Assets/icon/liked.svg';
import PostReplyModal from '../PostReplyModal';

const ReplyCard = ({ tweet, signinUser, handleRender }) => {
  const [likeState, setLikeStatus] = useState(tweet?.isLike);
  function handleLikeStateChange() {
    setLikeStatus(!likeState);
  }
  return (
    <div className={styles.replyBlock}>
      <div className={styles.replyCard}>
        <div className={styles.replyCardHeader}>
          <div className={styles.avatar}>
            <img
              src={tweet.User?.avatar}
              alt=''
            />
          </div>
          <div>
            <div className={styles.headerTitle}>{tweet.User?.name}</div>
            <div className={styles.tag}>@{tweet.User?.account}</div>
          </div>
        </div>
        <div className={styles.content}> {tweet.description}</div>
        <div className={styles.replyCardFooter}>{tweet.createdAt}</div>
      </div>
      <div className={styles.bar}>
        <span>{tweet.replies} </span>回覆
        <span>{tweet.likes}</span>喜歡次數
      </div>
      <div className={styles.interact}>
        <PostReplyModal
          className={styles.interactIcon}
          tweetId={tweet?.id}
          signinUser={signinUser}
          handleRender={handleRender}
        />
        <Liked
          className={`${styles.interactIcon} ${likeState ? styles.liked : styles.unliked}`}
          stroke='#6C757D'
          onClick={handleLikeStateChange}
        />
      </div>
    </div>
  );
};
export default ReplyCard;
