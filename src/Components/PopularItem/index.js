import React from 'react';
import styles from './style.module.css';

const PopularItem = ({ id, name, tag, avatar, following }) => {
  const handleAddFollow = e => {
    //送出追蹤
  };

  const handleRemoveFollow = e => {
    //移除追蹤
  };

  return (
    <div className={styles.popularItem}>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img
            src={avatar ? avatar : 'https://i.imgur.com/TGuHpHB.jpg'}
            alt=''
          />
        </div>
        <div className={styles.textBlock}>
          <div className={styles.name}>{name}</div>
          <div className={styles.tag}>{tag}</div>
        </div>
      </div>
      <div className={styles.buttonFiled}>
        {following ? (
          <button
            id={id}
            className={styles.activeButton}
            onClick={e => handleRemoveFollow(e)}>
            正在跟隨
          </button>
        ) : (
          <button
            id={id}
            className={styles.button}
            onClick={e => handleAddFollow(e)}>
            跟隨
          </button>
        )}
      </div>
    </div>
  );
};
export default PopularItem;
