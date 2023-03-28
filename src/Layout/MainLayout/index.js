import React, { useEffect, useState } from 'react';
import { Header, SideNav, ReplyCard, PostTweetModal } from '../../Components';
import PopularList from '../../Lists/PopularList';
import TweetList from '../../Lists/TweetList';
import ReplyList from '../../Lists/ReplyList';
import styles from './style.module.css';
import { getAllTweets } from '../../API/auth.js';
import { getOneUser } from '../../API/getOneUser';
import { useAuth } from '../../Context/AuthContext';

const MainLayout = ({ header, tab }) => {
  const userId = useAuth().currentMember.id;
  const [tweetsData, setTweetsData] = useState([]);
  const [userData, setUserData] = useState({});
  const getData = async () => {
    const [res, user] = await Promise.all([getAllTweets(), getOneUser(userId)]);
    setTweetsData(res.data);
    setUserData(prev => ({ ...prev, id: user.id, avatar: user.avatar }));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.userpage}>
      <SideNav
        currentPage='main'
        avatar={userData.avatar}
      />
      <div className={styles.mainContent}>
        <Header text={header} />
        <div className={styles.contentList}>
          {tab === 'tweets' && (
            <div>
              <PostTweetModal
                mode={'block'}
                avatar={userData.avatar}
              />
              <TweetList data={tweetsData} />
            </div>
          )}
          {tab === 'replies' && (
            <div>
              <ReplyCard
                name='Apple'
                tag='@apple'
                content='Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.'
                time='上午 10:05・2021年11月10日'
              />
              <ReplyList />
            </div>
          )}
        </div>
      </div>
      <PopularList />
    </div>
  );
};
export default MainLayout;
