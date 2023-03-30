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

const ProfileLayout = ({ user, tweets, replies, likes, handleRender }) => {
  const [tab, setTab] = useState('tweets');
  return (
    <div className={styles.userpage}>
      <SideNav currentPage='user' />
      <div className={styles.mainContent}>
        <ProfileHeader
          text={user?.account}
          num={user?.tweets}
        />
        <div className={styles.contentList}>
          {user && (
            <UserCard
              user={user}
              isFollowing={user.isFollowing}
              handleRender={handleRender}
            />
          )}
          <ProfileTabs
            data={tabsList}
            currentTab={tab}
            changeTab={setTab}
          />
          {tab === 'tweets' && tweets && (
            <UserTweetList
              data={tweets}
              user={user}
            />
          )}
          {tab === 'replies' && replies && (
            <UserReplyList
              data={replies}
              user={user}
            />
          )}
          {tab === 'likes' && likes && <UserLikeList data={likes} />}
        </div>
      </div>
      <PopularList />
    </div>
  );
};
export default ProfileLayout;
