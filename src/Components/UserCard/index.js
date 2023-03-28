import React from 'react';
import { ReactComponent as Noti0 } from '../../Assets/icon/noti0.svg';
import { ReactComponent as Noti1 } from '../../Assets/icon/noti1.svg';
import { ReactComponent as Msg } from '../../Assets/icon/msg.svg';
import styles from './style.module.css';
import UserEditModel from '../UserEditModal';
import { Link } from 'react-router-dom';
import { TweetButton } from '../../Components';

const UserCard = props => {
  const { handleRender, userData } = props;
  const { id, name, account, avatar, cover, introduction, followings, followers, isFollowing, isMyself, noti } = userData;
  const userModalData = { id, name, introduction, avatar, cover };
  return (
    <div className={styles.UserInfo}>
      <div className={styles.bgImg}>
        <img
          src={cover || 'https://i.imgur.com/vzIPCvD.png'}
          alt=''
        />
      </div>
      <div className={styles.userActions}>
        <div className={styles.avatar}>
          <img
            src={avatar || 'https://i.imgur.com/TGuHpHB.jpg'}
            alt=''
          />
        </div>
        {isMyself ? (
          <UserEditModel
            userData={userModalData}
            handleRender={handleRender}
          />
        ) : (
          <>
            <Msg style={{ marginRight: '8px' }} />
            <div style={{ marginRight: '8px' }}>{noti ? <Noti1 /> : <Noti0 />}</div>
            <div style={{ marginRight: '8px' }}>{isFollowing ? <TweetButton text='正在跟隨' /> : <TweetButton text='追蹤' />}</div>
          </>
        )}
      </div>
      <div className={styles.username}>{name ? name : 'Jane Cathy'}</div>
      <div className={styles.account}>@{account}</div>
      <div className={styles.intro}>{introduction}</div>
      <div className={styles.followship}>
        <Link to='/followers'>
          <span className={styles.following}>{followings} 個</span>
          <span style={{ color: '#929292' }}>跟隨中</span>
        </Link>
        <Link to='/followers'>
          <span className={styles.follower}>{followers} 位</span>
          <span style={{ color: '#929292' }}>跟隨者</span>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
