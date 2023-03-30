import React from 'react';
import styles from './style.module.css';
import { TweetItem } from '../../Components';

const UserTweetList = ({ data, user }) => {
  const renderData = data.length ? (
    data.map(item => (
      <TweetItem
        authorImg={user?.avatar}
        name={user?.name}
        tag={user?.account}
        key={item.id}
        liked={item.isLike}
        time={item.updatedAt}
        content={item.description}
        msgCount={item.replies}
        likesCount={item.likes}
        tweetID={item.id}
      />
    ))
  ) : (
    <h5 className={styles.blank}>尚未發布過推文</h5>
  );

  return <div className={styles.tweetList}>{renderData}</div>;
};
export default UserTweetList;
