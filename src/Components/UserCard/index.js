import React from 'react';
import { ReactComponent as Noti0 } from '../../Assets/icon/noti0.svg';
import { ReactComponent as Noti1 } from '../../Assets/icon/noti1.svg';
import { ReactComponent as Msg } from '../../Assets/icon/msg.svg';
import styles from './style.module.css';
import UserEditModel from '../UserEditModal';
import { Link } from 'react-router-dom';
import { TweetButton } from '../../Components';

const UserCard = ({ user, noti, handleRender }) => {
  return (
    <div className={styles.UserInfo}>
      <div className={styles.bgImg}>
        <img
          src={user?.cover}
          alt=''
        />
        <div className={styles.avatar}>
          <img
            src={user?.avatar}
            alt=''
          />
        </div>
      </div>
      <div className={styles.userActions}>
        {user?.isMyself ? (
          <UserEditModel
            userData={user}
            handleRender={handleRender}
          />
        ) : (
          <>
            <Msg />
            {noti ? <Noti1 /> : <Noti0 />}
            <div>
              {user?.isFollowing ? (
                <TweetButton
                  text='正在跟隨'
                  userId={user?.id}
                  handleRender={handleRender}
                />
              ) : (
                <TweetButton
                  text='跟隨'
                  userId={user?.id}
                  handleRender={handleRender}
                />
              )}
            </div>
          </>
        )}
      </div>
      <div className={styles.username}>{user?.name}</div>
      <div className={styles.account}>@{user?.account}</div>
      <div className={styles.intro}>{user?.introduction}</div>
      <div className={styles.followship}>
        <Link to={`/followers/${user?.id}`}>
          <span className={styles.following}>{user?.followings} 個</span>
          <span style={{ color: '#929292' }}>跟隨中</span>
        </Link>
        <Link to={`/followers/${user?.id}`}>
          <span className={styles.follower}>{user?.followers} 位</span>
          <span style={{ color: '#929292' }}>跟隨者</span>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
