import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const FollowItem = ({ id, name, content, avatar, following }) => {
  return (
    <div className={styles.card}>
      <Link to={`/profile/${id}`}>
        <div className={styles.avatar}>
          <img
            src={avatar}
            alt=''
          />
        </div>
      </Link>
      <div className={styles.rightContent}>
        <div className={styles.title}>
          <p>{name}</p>
          {following ? <button className={styles.activeButton}>正在跟隨</button> : <button className={styles.button}>跟隨</button>}
        </div>
        <div className={styles.body}>{content}</div>
      </div>
    </div>
  );
};
export default FollowItem;
