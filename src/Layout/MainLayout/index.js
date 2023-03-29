import React from 'react';
import { Header, SideNav, ReplyCard, PostTweetModal } from '../../Components';
import PopularList from '../../Lists/PopularList';
import TweetList from '../../Lists/TweetList';
import ReplyList from '../../Lists/ReplyList';
import styles from './style.module.css';

const MainLayout = ({ header, tab, user, mainPageData, replyPageData }) => {
  return (
    <div className={styles.userpage}>
      <SideNav
        currentPage='main'
        avatar={user?.avatar}
        handleRender={mainPageData?.handleRender}
      />
      <div className={styles.mainContent}>
        <Header text={header} />
        <div className={styles.contentList}>
          {tab === 'tweets' && (
            <div>
              <PostTweetModal
                mode={'block'}
                avatar={user?.avatar}
                handleRender={mainPageData.handleRender}
              />
              <TweetList
                data={mainPageData.tweets}
                handleRender={mainPageData.handleRender}
              />
            </div>
          )}
          {tab === 'replies' && (
            <div>
              <ReplyCard
                tweet={replyPageData?.tweet}
                signinUser={user}
                handleRender={replyPageData?.handleRender}
              />
              <ReplyList
                data={replyPageData?.replies}
                tweet={replyPageData?.tweet}
              />
            </div>
          )}
        </div>
      </div>
      <PopularList />
    </div>
  );
};
export default MainLayout;
