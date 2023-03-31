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

const ProfileLayout = ({ signinUser, user, tweets, replies, likes, handleRender }) => {
  const [tab, setTab] = useState('tweets');
  return (
    <div className={styles.userpage}>
      <SideNav
        currentPage='user'
        avatar={user?.avatar}
        handleRender={handleRender}
      />
      <div className={styles.mainContent}>
        {signinUser && user && tweets && replies && likes && !user.iat && (
          <>
            <ProfileHeader
              text={user?.name}
              num={user?.tweets}
            />
            <div className={styles.contentList}>
              <UserCard
                user={user}
                isFollowing={user.isFollowing}
                handleRender={handleRender}
              />
              <ProfileTabs
                data={tabsList}
                currentTab={tab}
                changeTab={setTab}
              />
              {tab === 'tweets' && tweets && (
                <UserTweetList
                  data={tweets}
                  user={user}
                  signinUser={signinUser}
                />
              )}
              {tab === 'replies' && replies && (
                <UserReplyList
                  data={replies}
                  user={user}
                  signinUser={signinUser}
                />
              )}
              {tab === 'likes' && likes && (
                <UserLikeList
                  data={likes}
                  signinUser={signinUser}
                />
              )}
            </div>
          </>
        )}
      </div>
      <PopularList />
    </div>
  );
};
export default ProfileLayout;
