import React, { useState } from 'react';
import { ReactComponent as Delete } from '../../Assets/icon/delete.svg';
import { ReactComponent as Liked } from '../../Assets/icon/liked.svg';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import PostReplyModal from '../PostReplyModal';
import { deleteTweet } from '../../API/deleteTweet';
import { addLike, removeLike } from '../../API/Like';
import { relativeTimeFormat } from '../../helpers';

const TweetItem = ({ id, replyTarget, tweetID, userID, authorImg, name, tag, content, time, admin, reply, liked, msgCount, likesCount, handleRender, signinUser }) => {
  const [likeState, setLikeStatus] = useState(liked);
  const [likesNums, setLikesNums] = useState(likesCount);
  const handleLikeStatus = async id => {
    setLikeStatus(!likeState);
    if (likeState) {
      setLikesNums(prev => (prev = prev - 1));
      await removeLike(id);
    } else {
      setLikesNums(prev => (prev = prev + 1));
      await addLike(id);
    }
  };

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
      {!admin ? (
        <Link to={`/profile/${userID}`}>
          <img
            alt='author-img'
            src={authorImg}
            className={styles.authorImg}
          />
        </Link>
      ) : (
        <img
          alt='author-img'
          src={authorImg}
          className={styles.authorImg}
        />
      )}
      <div className={styles.rightContent}>
        <div className={styles.title}>
          <p>{name}</p>
          <span>
            @{tag}・{relativeTimeFormat(time)}
          </span>
          {admin && (
            <Delete
              className={styles.deleteIcon}
              onClick={e => {
                e.stopPropagation();
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
        {!admin ? (
          <p className={styles.body}>
            <Link to={`/tweet/${tweetID}/replies`}>{content}</Link>
          </p>
        ) : (
          <p className={styles.body}>{content}</p>
        )}
        {!admin && !reply && (
          <div className={styles.interact}>
            <PostReplyModal
              className={styles.icon}
              tweetId={tweetID}
              handleRender={handleRender}
              signinUser={signinUser}
            />
            <span>{msgCount}</span>
            <Liked
              className={`${styles.icon} ${likeState ? styles.liked : styles.unliked}`}
              stroke='#6C757D'
              onClick={e => {
                e.stopPropagation();
                handleLikeStatus(tweetID);
              }}
            />
            <span>{likesNums}</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default TweetItem;
