import React, { useState, useEffect } from 'react';
import { ProfileHeader, SideNav, ProfileTabs } from '../../Components';
import PopularList from '../../Lists/PopularList';
import FollowerList from '../../Lists/FollowerList';
import FollowingList from '../../Lists/FollowingList';
import { getUserFollowers, getUserFollowings } from '../../API/getUsersInfo';
import { getOneUser } from '../../API/getOneUser';
import styles from './style.module.css';

const tabsList = [
  { label: '追蹤者', value: 'followers' },
  { label: '正在追蹤', value: 'following' }
];

const FollowshipLayout = ({ userId }) => {
  const [tab, setTab] = useState('followers');
  const [user, setUser] = useState({});
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const [followersData, followingsData, user] = await Promise.all([getUserFollowers(userId), getUserFollowings(userId), getOneUser(userId)]);
      setFollowers(followersData);
      setFollowings(followingsData);
      setUser(user);
    };
    getData();
  }, [userId]);

  return (
    <div className={styles.userpage}>
      <SideNav />
      <div className={styles.mainContent}>
        <ProfileHeader
          text={user?.name}
          num={user?.tweets}
        />
        <div className={styles.contentList}>
          <ProfileTabs
            data={tabsList}
            currentTab={tab}
            changeTab={setTab}
          />
          <div className={styles.container}>{tab === 'followers' ? <FollowerList data={followers ? followers : []} /> : <FollowingList data={followings ? followings : []} />}</div>
        </div>
      </div>
      <PopularList />
    </div>
  );
};
export default FollowshipLayout;
