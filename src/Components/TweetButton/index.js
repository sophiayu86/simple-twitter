import React from 'react';
import styles from './style.module.css';
import { addFollow, removeFollow } from '../../API/Followship';

const TweetButton = ({ text, userId, handleRender }) => {
  const handleClick = async id => {
    const { status } = text === '正在跟隨' ? await removeFollow(id) : await addFollow(id);
    if (status === 'success') return handleRender();
  };

  const buttonStyle = text === '正在跟隨' ? styles.unfollowBtn : styles.followBtn;

  return (
    <div
      className={buttonStyle}
      onClick={() => handleClick(userId)}>
      {text}
    </div>
  );
};
export default TweetButton;
