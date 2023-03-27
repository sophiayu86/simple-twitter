import React, { useState } from 'react';
import { ProfileHeader, ProfileTabs, SideNav, UserCard } from '../../Components';
import PopularList from '../../Lists/PopularList';
import UserTweetList from '../../Lists/UserTweetList';
import UserReplyList from '../../Lists/UserReplyList';
import UserLikeList from '../../Lists/UserLikeList';
import styles from './style.module.css';

const tabsList = [
  { label: '推文', value: 'tweets' },
  { label: '回覆', value: 'replies' },
  { label: '喜歡的內容', value: 'likes' }
];

const ProfileLayout = () => {
  const [tab, setTab] = useState('tweets');
  return (
    <div className={styles.userpage}>
      <SideNav currentPage='user' />
      <div className={styles.mainContent}>
        <ProfileHeader
          text='John'
          num='25'
        />
        <div className={styles.contentList}>
          <UserCard
            follower={124}
            following={999}
          />
          <ProfileTabs
            data={tabsList}
            currentTab={tab}
            changeTab={setTab}
          />
          {tab === 'tweets' && <UserTweetList />}
          {tab === 'replies' && <UserReplyList />}
          {tab === 'likes' && <UserLikeList />}
        </div>
      </div>
      <PopularList />
    </div>
  );
};
export default ProfileLayout;
