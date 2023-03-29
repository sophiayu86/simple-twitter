import React from 'react';
import { Header, SideNav, ReplyCard, PostTweetModal } from '../../Components';
import PopularList from '../../Lists/PopularList';
import TweetList from '../../Lists/TweetList';
import ReplyList from '../../Lists/ReplyList';
import styles from './style.module.css';
// import { getAllTweets } from '../../API/auth.js';

const MainLayout = ({ header, tab, data, user, reply, handleRender }) => {
  const replyTarget = reply?.User?.account;
  return (
    <div className={styles.userpage}>
      <SideNav
        currentPage='main'
        avatar={user.avatar}
        handleRender={handleRender}
      />
      <div className={styles.mainContent}>
        <Header text={header} />
        <div className={styles.contentList}>
          {tab === 'tweets' && (
            <div>
              <PostTweetModal
                mode={'block'}
                avatar={user.avatar}
                handleRender={handleRender}
              />
              <TweetList data={data} />
            </div>
          )}
          {tab === 'replies' && (
            <div>
              <ReplyCard reply={reply} />
              <ReplyList
                data={data}
                replyTarget={replyTarget}
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
