import React, { useEffect, useState } from 'react';
import { Header, SideNav, ReplyCard, PostTweetModal } from '../../Components';
import PopularList from '../../Lists/PopularList';
import TweetList from '../../Lists/TweetList';
import ReplyList from '../../Lists/ReplyList';
import styles from './style.module.css';
import { useAuth } from '../../Context/AuthContext';
import { getOneUser } from '../../API/getOneUser';

const MainLayout = ({ header, tab, user, mainPageData, replyPageData }) => {
  const { currentMember } = useAuth();
  const userId = currentMember?.id;
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getOneUser(userId);
      if (data) setUserData(prev => ({ ...prev, avatar: data.avatar, cover: data.cover, name: data.name, account: data.account, email: data.email }));
    };
    getData();
  }, [userId]);

  return (
    <div className={styles.userpage}>
      {userData && (
        <SideNav
          currentPage='main'
          avatar={userData.avatar}
          handleRender={mainPageData?.handleRender}
        />
      )}
      <div className={styles.mainContent}>
        <Header text={header} />
        <div className={styles.contentList}>
          {tab === 'tweets' && (
            <div className={styles.container}>
              {userData && (
                <PostTweetModal
                  mode={'block'}
                  avatar={userData.avatar}
                  handleRender={mainPageData.handleRender}
                />
              )}
              <TweetList
                data={mainPageData.tweets}
                signinUser={userData}
                handleRender={mainPageData.handleRender}
              />
            </div>
          )}
          {tab === 'replies' && (
            <div>
              {user && (
                <>
                  <ReplyCard
                    tweet={replyPageData?.tweet}
                    signinUser={userData}
                    handleRender={replyPageData?.handleRender}
                  />
                  <ReplyList
                    data={replyPageData?.replies}
                    tweet={replyPageData?.tweet}
                  />
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <PopularList />
    </div>
  );
};
export default MainLayout;
