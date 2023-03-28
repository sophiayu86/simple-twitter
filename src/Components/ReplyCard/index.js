import React, { useState, useEffect } from 'react';
import { ReactComponent as ACIcon } from '../../Assets/icon/acIcon.svg';
import styles from './style.module.css';
import { ReactComponent as Liked } from '../../Assets/icon/liked.svg';
import PostReplyModal from '../PostReplyModal';

const ReplyCard = ({ id, name, tag, content, time, liked, signinUser }) => {
  const [likeState, setLikeStatus] = useState(liked);
  function handleLikeStateChange() {
    setLikeStatus(!likeState);
  }
  const [render, setRender] = useState(0);
  const handelRender = () => {
    setRender(prev => (prev += 1));
  };
  useEffect(() => {
    // const getData = async () => {};
    // getData();
    console.log('ReplyCard Render', render);
  }, [render]);
  return (
    <div className={styles.replyBlock}>
      <div className={styles.replyCard}>
        <div className={styles.replyCardHeader}>
          <ACIcon className={styles.icon} />
          <div>
            <div className={styles.headerTitle}>{name}</div>
            <div className={styles.tag}>{tag}</div>
          </div>
        </div>
        <div className={styles.content}> {content}</div>
        <div className={styles.replyCardFooter}>{time}</div>
      </div>
      <div className={styles.bar}>
        <span>13 </span>回覆
        <span>13</span>喜歡次數
      </div>
      <div className={styles.interact}>
        <PostReplyModal
          className={styles.interactIcon}
          tweetId={id}
          signinUser={signinUser}
          handelRender={handelRender}
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
