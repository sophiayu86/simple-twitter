import React from 'react';
import { ReactComponent as Noti0 } from '../../Assets/icon/noti0.svg';
import { ReactComponent as Noti1 } from '../../Assets/icon/noti1.svg';
import { ReactComponent as Msg } from '../../Assets/icon/msg.svg';
import styles from './style.module.css';
import UserEditModel from '../UserEditModal';
import { Link } from 'react-router-dom';
// import { useState } from "react";

//測試User edit model：打開後會帶入這邊的資料，之後需換成從API拿到的User資料
const userData = {
  id: 14,
  name: 'TestQQQ',
  introduction: 'Testtest',
  avatar: 'https://loremflickr.com/360/360/cats?lock=76519',
  cover: 'https://loremflickr.com/639/378/animals?lock=84580'
};

const UserCard = ({ username, account, intro, following, follower, isMe, noti, isFollowing }) => {
  return (
    <div className={styles.UserInfo}>
      <div className={styles.bgImg}>背景</div>
      <div className={styles.avatar}>大頭暫時黑框</div>

      <div className={styles.userActions}>
        {isMe ? (
          <UserEditModel userData={userData} /> // userData 要帶入資料
        ) : (
          <section>
            <Msg className={styles.Msg} />
            {noti ? <Noti1 className={styles.Noti1} /> : <Noti0 className={styles.Noti0} />}
            {isFollowing ? <button className={styles.isFollowingButton}>正在跟隨</button> : <button className={styles.followButton}>追蹤</button>}
          </section>
        )}
      </div>
      <div className={styles.nameandaccount}>
        <span className={styles.username}>
          {username}
          Jane Cathy
        </span>
        <span className={styles.account}>{account}@cath1999</span>
      </div>

      <div className={styles.intro}>{intro}"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</div>
      <div className={styles.followship}>
        <Link to='/following'>
          <span className={styles.following}>{following} 個跟隨中</span>
        </Link>
        <Link to='/followers'>
          <span className={styles.follower}>{follower} 位跟隨者</span>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
