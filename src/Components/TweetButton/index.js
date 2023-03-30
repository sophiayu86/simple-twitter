import React from 'react';
import styles from './style.module.css';

const TweetButton = ({ text, userId, handleClick }) => {
  const buttonStyle = text === '正在跟隨' ? styles.unfollowBtn : styles.followBtn;

  return (
    <button
      className={buttonStyle}
      onClick={e => {
        e.stopPropagation();
        handleClick?.(userId);
      }}>
      {text}
    </button>
  );
};
export default TweetButton;
