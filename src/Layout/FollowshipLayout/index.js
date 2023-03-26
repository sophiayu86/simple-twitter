import React, { useState } from 'react';
import { ProfileHeader, SideNav, ProfileTabs } from '../../Components';
import PopularList from '../../Lists/PopularList';
import FollowerList from '../../Lists/FollowerList';
import FollowingList from '../../Lists/FollowingList';
import styles from './style.module.css';

const tabsList = [
  { label: '追蹤者', value: 'followers' },
  { label: '正在追蹤', value: 'following' }
];

const FollowshipLayout = () => {
  const [tab, setTab] = useState('followers');
  return (
    <div className={styles.userpage}>
      <SideNav />
      <div className={styles.mainContent}>
        <ProfileHeader text='John' num='25' />
        <div className={styles.fixedTabs}>
          <ProfileTabs data={tabsList} currentTab={tab} changeTab={setTab} />
        </div>
        <div className={styles.contentList}>{tab === 'followers' ? <FollowerList /> : <FollowingList />}</div>
      </div>
      <PopularList />
    </div>
  );
};
export default FollowshipLayout;
