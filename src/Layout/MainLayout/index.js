import React, { useEffect, useState } from 'react';
import { Header, SideNav, ReplyCard, PostTweetModal } from '../../Components';
import PopularList from '../../Lists/PopularList';
import TweetList from '../../Lists/TweetList';
import ReplyList from '../../Lists/ReplyList';
import styles from './style.module.css';
import { getAllTweets } from '../../API/auth.js';
import { getOneUser } from '../../API/getOneUser';
import { useAuth } from '../../Context/AuthContext';
import { userContext } from '../../Context/UserContext';

const MainLayout = ({ header, tab }) => {
  const userId = useAuth().currentMember.id;
  const [tweetsData, setTweetsData] = useState([]);
  const [userData, setUserData] = useState({});
  const [render, setRender] = useState(0);
  const handleRender = () => {
    setRender(prev => (prev += 1));
  };
  useEffect(() => {
    const getData = async () => {
      const [res, user] = await Promise.all([getAllTweets(), getOneUser(userId)]);
      setTweetsData(res.data);
      setUserData(prev => ({ ...prev, id: user.id, avatar: user.avatar }));
    };
    console.log('MainLayout Render', render);
    getData();
  }, [render, userId]);

  return (
    <div className={styles.userpage}>
      <SideNav
        currentPage='main'
        avatar={userData.avatar}
        handleRender={handleRender}
      />
      <div className={styles.mainContent}>
        <Header text={header} />
        <userContext.Provider value={{ signinUser: userData, handleRender }}>
          <div className={styles.contentList}>
            {tab === 'tweets' && (
              <div>
                <PostTweetModal
                  mode={'block'}
                  avatar={userData.avatar}
                  handleRender={handleRender}
                />
                {/* 裡面有post reply，需共用user context avatar | handle change 用首頁的 */}
                <TweetList data={tweetsData} />
              </div>
            )}

            {tab === 'replies' && (
              <div>
                {/* 裡面有post reply， handle change 用reply頁的，id 要更改*/}
                <ReplyCard
                  id={14}
                  name='Apple'
                  tag='@apple'
                  content='Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.'
                  time='上午 10:05・2021年11月10日'
                  signinUser={userData}
                />
                <ReplyList />
              </div>
            )}
          </div>
        </userContext.Provider>
      </div>
      <PopularList />
    </div>
  );
};
export default MainLayout;
