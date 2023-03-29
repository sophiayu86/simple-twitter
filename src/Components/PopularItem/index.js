import React, { useState } from 'react';
import { addFollow, removeFollow } from '../../API/Followship';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const PopularItem = ({ id, name, tag, avatar, following }) => {
  const [followingStatus, setfollowingStatus] = useState(following);
  const handleFollow = async e => {
    const { id } = e.target;
    setfollowingStatus(!followingStatus);
    followingStatus ? await removeFollow(id) : await addFollow(id);
  };
  return (
    <div className={styles.popularItem}>
      <div className={styles.info}>
        <Link to={`/profile/${id}`}>
          <div className={styles.avatar}>
            <img
              src={avatar ? avatar : 'https://i.imgur.com/TGuHpHB.jpg'}
              alt=''
            />
          </div>
        </Link>
        <div className={styles.textBlock}>
          <div className={styles.name}>{name}</div>
          <div className={styles.tag}>{tag}</div>
        </div>
      </div>
      <div className={styles.buttonFiled}>
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
    </div>
  );
};
export default PopularItem;
