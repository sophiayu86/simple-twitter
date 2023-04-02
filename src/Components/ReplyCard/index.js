import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { ReactComponent as Liked } from '../../Assets/icon/liked.svg';
import { absoluteTimeFormat } from '../../helpers';
import PostReplyModal from '../PostReplyModal';
import { addLike, removeLike } from '../../API/Like';
import { Link } from 'react-router-dom';

const ReplyCard = ({ tweet, signinUser, handleRender }) => {
  const [likeState, setLikeStatus] = useState(false);
  const [likesNums, setLikesNums] = useState(0);
  useEffect(() => {
    setLikesNums(tweet.likes);
    setLikeStatus(tweet.isLike);
  }, [tweet]);
  let tweetID = tweet?.id;
  const handleLikeStatus = async id => {
    setLikeStatus(!likeState);
    if (likeState) {
      setLikesNums(likesNums - 1);
      await removeLike(id);
    } else {
      setLikesNums(likesNums + 1);
      await addLike(id);
    }
  };
  return (
    <div className={styles.replyBlock}>
      <div className={styles.replyCard}>
        <div className={styles.replyCardHeader}>
          <div className={styles.avatar}>
            <Link to={`/profile/${tweet?.UserId}`}>
              <img
                src={tweet.User?.avatar}
                alt=''
                onError={e => (e.target.src = 'https://i.imgur.com/TGuHpHB.jpg')}
              />
            </Link>
          </div>
          <div>
            <div className={styles.headerTitle}>{tweet.User?.name}</div>
            <div className={styles.tag}>@{tweet.User?.account}</div>
          </div>
        </div>
        <div className={styles.content}>{tweet.description}</div>
        <div className={styles.replyCardFooter}>{absoluteTimeFormat(tweet.createdAt)}</div>
      </div>
      <div className={styles.bar}>
        <span>{tweet.replies} </span>回覆
        <span>{likesNums} </span>喜歡次數
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
          onClick={e => {
            e.stopPropagation();
            handleLikeStatus(tweetID);
          }}
        />
      </div>
    </div>
  );
};
export default ReplyCard;
