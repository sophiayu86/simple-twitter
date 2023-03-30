import React, { useState } from 'react';
import { ReactComponent as Delete } from '../../Assets/icon/delete.svg';
import { ReactComponent as Liked } from '../../Assets/icon/liked.svg';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import PostReplyModal from '../PostReplyModal';
import { deleteTweet } from '../../API/deleteTweet';

const TweetItem = ({ id, replyTarget, tweetID, userID, authorImg, name, tag, content, time, admin, reply, liked, msgCount, likesCount, handleRender }) => {
  const [likeState, setLikeStatus] = useState(liked);
  function handleLikeStateChange() {
    setLikeStatus(!likeState);
  }

  const handleDelete = async id => {
    try {
      await deleteTweet(id);
      handleRender();
    } catch (error) {
      console.error(error);
      handleRender();
    }
  };

  return (
    <div className={styles.card}>
      <Link to={`/profile/${userID}`}>
        <img
          alt='author-img'
          src={authorImg}
          className={styles.authorImg}
        />
      </Link>
      <div className={styles.rightContent}>
        <div className={styles.title}>
          <p>{name}</p>
          <span>
            @{tag}・{time}
          </span>
          {admin && (
            <Delete
              className={styles.deleteIcon}
              onClick={() => {
                handleDelete(id);
              }}
            />
          )}
        </div>
        {reply && (
          <div className={styles.reply}>
            回覆<span>@{replyTarget}</span>
          </div>
        )}
        <p className={styles.body}>
          <Link to={`/tweet/${tweetID}/replies`}>{content}</Link>
        </p>

        {!admin && !reply && (
          <div className={styles.interact}>
            <PostReplyModal
              className={styles.icon}
              tweetId={tweetID}
              handleRender={handleRender}
            />
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
    </div>
  );
};
export default TweetItem;
