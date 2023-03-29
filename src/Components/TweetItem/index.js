import React, { useState } from 'react';
import { ReactComponent as Delete } from '../../Assets/icon/delete.svg';
import { ReactComponent as Talk } from '../../Assets/icon/talk.svg';
import { ReactComponent as Liked } from '../../Assets/icon/liked.svg';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const TweetItem = ({ replyTarget, tweetID, userID, authorImg, name, tag, content, time, admin, reply, liked, msgCount, likesCount }) => {
  const [likeState, setLikeStatus] = useState(liked);
  function handleLikeStateChange() {
    setLikeStatus(!likeState);
  }
  return (
    <div className={styles.card}>
      <Link to={`/tweet/${tweetID}/replies`}></Link>
      <div className={styles.tweetItem}>
        <Link to={`/profile/${userID}`}>
          <img
            alt='author-img'
            src={authorImg}
            className={styles.authorImg}
          />
        </Link>
        <p>{name}</p>
        <span>
          @{tag}・{time}
        </span>
        {admin && (
          <Delete
            className={styles.deleteIcon}
            onClick={() => console.log('delete this')}
          />
        )}
      </div>
      {reply && (
        <div className={styles.reply}>
          回覆<span>@{replyTarget}</span>
        </div>
      )}
      <Link to={`/tweet/${tweetID}/replies`}>
        <div className={styles.content}>{content}</div>
      </Link>
      {!admin && !reply && (
        <div className={styles.interact}>
          <Talk className={styles.icon} />
          <span>{msgCount}</span>
          <Liked
            className={`${styles.icon} ${likeState ? styles.liked : styles.unliked}`}
            stroke='#6C757D'
            onClick={handleLikeStateChange}
          />
          <span>{likesCount}</span>
        </div>
      )}
    </div>
  );
};
export default TweetItem;
