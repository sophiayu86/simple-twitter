import React from 'react';
import { ReactComponent as Noti0 } from '../../Assets/icon/noti0.svg';
import { ReactComponent as Noti1 } from '../../Assets/icon/noti1.svg';
import { ReactComponent as Msg } from '../../Assets/icon/msg.svg';
import styles from './style.module.css';
import UserEditModel from '../UserEditModal';
import { Link } from 'react-router-dom';
// import { useState } from "react";
import { TweetButton } from '../../Components';

//測試User edit model：打開後會帶入這邊的資料，之後需換成從API拿到的User資料
const userData = {
  id: 14,
  name: 'TestQQQ',
  introduction: 'Testtest',
  avatar: 'https://loremflickr.com/360/360/cats?lock=76519',
  cover: 'https://loremflickr.com/639/378/animals?lock=84580'
};

const UserCard = ({ username, account, intro, following, follower, isMe = true, noti, isFollowing }) => {
  return (
    <div className={styles.UserInfo}>
      <div className={styles.bgImg}>背景</div>
      <div className={styles.userActions}>
        <div className={styles.avatar}></div>
        {isMe ? (
          <UserEditModel userData={userData} /> // userData 要帶入資料
        ) : (
          <>
            <Msg style={{ marginRight: '8px' }} />
            <div style={{ marginRight: '8px' }}>{noti ? <Noti1 /> : <Noti0 />}</div>
            <div style={{ marginRight: '8px' }}>{isFollowing ? <TweetButton text='正在跟隨' /> : <TweetButton text='追蹤' />}</div>
          </>
        )}
      </div>
      <div className={styles.username}>{username ? username : 'Jane Cathy'}</div>
      <div className={styles.account}>{account}@cath1999</div>
      <div className={styles.intro}>{intro}"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</div>
      <div className={styles.followship}>
        <Link to='/followers'>
          <span className={styles.following}>{following} 個</span>
          <span style={{ color: '#929292' }}>跟隨中</span>
        </Link>
        <Link to='/followers'>
          <span className={styles.follower}>{follower} 位</span>
          <span style={{ color: '#929292' }}>跟隨者</span>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
