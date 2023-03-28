import React, { useState } from 'react';
import { ReactComponent as Delete } from '../../Assets/icon/delete.svg';
import { ReactComponent as Liked } from '../../Assets/icon/liked.svg';
import styles from './style.module.css';
import PostReplyModal from '../PostReplyModal';
import { deleteTweet } from '../../API/deleteTweet';

const TweetItem = ({ id, authorImg, name, tag, content, time, admin, reply, liked, msgCount, likesCount, signinUser, handleRender }) => {
  const [likeState, setLikeStatus] = useState(liked);
  function handleLikeStateChange() {
    setLikeStatus(!likeState);
  }

  const handleDelete = async id => {
    console.log('id:', id);
    try {
      await deleteTweet(id);
      handleRender();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.tweetItem}>
        <img
          alt='author-img'
          src={authorImg ? authorImg : 'https://i.imgur.com/TGuHpHB.jpg'}
          className={styles.authorImg}
        />
        <p>{name}</p>
        <span>{tag}</span>
        <span>{time}</span>
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
          回覆<span>@ apple</span>
        </div>
      )}
      <div className={styles.content}>{content}</div>
      {!admin && !reply && (
        <div className={styles.interact}>
          <PostReplyModal
            className={styles.icon}
            tweetId={id}
            signinUser={signinUser}
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
  );
};
export default TweetItem;
