import React, { useState, useEffect } from 'react';
import { ProfileHeader, ProfileTabs, SideNav, UserCard } from '../../Components';
import PopularList from '../../Lists/PopularList';
import UserTweetList from '../../Lists/UserTweetList';
import UserReplyList from '../../Lists/UserReplyList';
import UserLikeList from '../../Lists/UserLikeList';
import styles from './style.module.css';
import { getOneUser } from '../../API/getOneUser';
import { useAuth } from '../../Context/AuthContext';

const tabsList = [
  { label: '推文', value: 'tweets' },
  { label: '回覆', value: 'replies' },
  { label: '喜歡的內容', value: 'likes' }
];

const ProfileLayout = () => {
  const userId = useAuth().currentMember.id;
  const [tab, setTab] = useState('tweets');
  const [userData, setUserData] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getUserData = async () => {
      const data = await getOneUser(userId); // 從context 拿 id
      setUserData(data);
    };
    getUserData();
  }, [count, userId]);

  const handleRender = () => {
    setCount(prev => (prev += 1));
  };

  return (
    <div className={styles.userpage}>
      <SideNav currentPage='user' />
      <div className={styles.mainContent}>
        <ProfileHeader
          text={userData?.name}
          num='25'
        />
        <div className={styles.contentList}>
          <UserCard
            handleRender={handleRender}
            userData={userData}
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
