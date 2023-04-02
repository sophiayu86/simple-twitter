import React from 'react';
import { Header, SideNav, ReplyCard, PostTweetModal } from '../../Components';
import PopularList from '../../Lists/PopularList';
import TweetList from '../../Lists/TweetList';
import ReplyList from '../../Lists/ReplyList';
import styles from './style.module.css';
import { useAuth } from '../../Context/AuthContext';

const MainLayout = ({ header, tab, mainPageData, replyPageData }) => {
  const { signinUser } = useAuth();

  return (
    <div className={styles.userpage}>
      <SideNav
        currentPage='main'
        handle
        Render={mainPageData?.handleRender}
      />
      <div className={styles.mainContent}>
        <Header text={header} />
        <div className={styles.contentList}>
          {tab === 'tweets' && (
            <div className={styles.container}>
              {signinUser && (
                <PostTweetModal
                  mode={'block'}
                  avatar={signinUser.avatar}
                  handleRender={mainPageData.handleRender}
                />
              )}
              <TweetList
                data={mainPageData.tweets}
                signinUser={signinUser}
                handleRender={mainPageData.handleRender}
              />
            </div>
          )}
          {tab === 'replies' && (
            <div>
              {signinUser && (
                <>
                  <ReplyCard
                    tweet={replyPageData?.tweet}
                    signinUser={signinUser}
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
