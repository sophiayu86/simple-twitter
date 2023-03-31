import React, { useState } from 'react';
import { ProfileHeader, SideNav, ProfileTabs } from '../../Components';
import PopularList from '../../Lists/PopularList';
import FollowerList from '../../Lists/FollowerList';
import FollowingList from '../../Lists/FollowingList';
import styles from './style.module.css';

const tabsList = [
  { label: '追隨者', value: 'followers' },
  { label: '正在追隨', value: 'following' }
];

const FollowshipLayout = ({ user, userID }) => {
  const [tab, setTab] = useState('followers');
  return (
    <div className={styles.userpage}>
      <SideNav />
      {user && (
        <div className={styles.mainContent}>
          <ProfileHeader
            text={user.name}
            num={user.tweets}
          />
          <div className={styles.contentList}>
            <ProfileTabs
              data={tabsList}
              currentTab={tab}
              changeTab={setTab}
            />
            <div className={styles.container}>{tab === 'followers' ? <FollowerList userId={userID} /> : <FollowingList userId={userID} />}</div>
          </div>
        </div>
      )}
      <PopularList />
    </div>
  );
};
export default FollowshipLayout;
