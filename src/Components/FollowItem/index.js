import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addFollow, removeFollow } from '../../API/Followship';
import styles from './style.module.css';

const FollowItem = ({ id, name, content, avatar, following, handleRender }) => {
  const [followingStatus, setfollowingStatus] = useState(following);
  const handleFollow = async e => {
    e.stopPropagation();
    const { id } = e.target;
    setfollowingStatus(!followingStatus);
    followingStatus ? await removeFollow(id) : await addFollow(id);
    handleRender?.();
  };
  return (
    <div className={styles.card}>
      <Link to={`/profile/${id}`}>
        <div className={styles.avatar}>
          <img
            src={avatar}
            alt=''
            onError={e => (e.target.src = 'https://i.imgur.com/TGuHpHB.jpg')}
          />
        </div>
      </Link>
      <div className={styles.rightContent}>
        <div className={styles.title}>
          <p>{name}</p>
          {followingStatus ? (
            <button
              id={id}
              className={styles.activeButton}
              onClick={e => handleFollow(e)}>
              正在跟隨
            </button>
          ) : (
            <button
              id={id}
              className={styles.button}
              onClick={e => handleFollow(e)}>
              跟隨
            </button>
          )}
        </div>
        <div className={styles.body}>{content}</div>
      </div>
    </div>
  );
};
export default FollowItem;
