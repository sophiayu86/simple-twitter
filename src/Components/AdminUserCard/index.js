import React from 'react';
import styles from './style.module.css';
import { ReactComponent as Reply } from '../../Assets/icon/reply.svg';
import { ReactComponent as Like } from '../../Assets/icon/like.svg';

const AdminUserCard = ({ userData }) => {
  return (
    <div className={styles.AdminUserCard}>
      <div className={styles.cover}>
        <img
          src={userData.cover ? userData.cover : 'https://i.imgur.com/vzIPCvD.png'}
          className={styles.coverImg}
          alt='coverImg'
          onError={e => (e.target.src = 'https://i.imgur.com/vzIPCvD.png')}
        />
      </div>

      <div className={styles.nameAndPhoto}>
        <div className={styles.avatar}>
          <img
            src={userData.avatar}
            className={styles.avatarImg}
            alt='avatarImg'
          />
        </div>
        <div className={styles.nameAndId}>
          <div className={styles.name}>{userData.name}</div>
          <div className={styles.account}>@{userData.account}</div>
        </div>
      </div>

      <div className={styles.rowAction}>
        <div className={styles.reply}>
          <Reply className={styles.cardIconReply} />
          <div className={styles.actionNumberReply}>{userData.tweets}</div>
        </div>
        <div className={styles.like}>
          <Like className={styles.cardIconLike} />
          <div className={styles.actionNumberLike}>{userData.likes}</div>
        </div>
      </div>

      <div className={styles.follow}>
        <div className={styles.follower}>
          <span className={styles.numberText}>{userData.followings}個</span>
          <span className={styles.followText}>跟隨中</span>
        </div>
        <div className={styles.following}>
          <span className={styles.numberText}>{userData.followers}個</span>
          <span className={styles.followText}>跟隨者</span>
        </div>
      </div>
    </div>
  );
};
export default AdminUserCard;
