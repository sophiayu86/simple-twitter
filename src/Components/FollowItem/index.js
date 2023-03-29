import React from 'react';
import { ReactComponent as ACIcon } from '../../Assets/icon/acIcon.svg';
import styles from './style.module.css';

const FollowItem = ({ name, content, following }) => {
  return (
    <div className={styles.card}>
      <div className={styles.followItem}>
        <ACIcon className={styles.ACIcon} />

        <p>{name}</p>

        {following ? <button className={styles.activeButton}>正在跟隨</button> : <button className={styles.button}>跟隨</button>}
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};
export default FollowItem;
