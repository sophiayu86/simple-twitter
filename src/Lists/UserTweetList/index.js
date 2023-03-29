import React from 'react';
import styles from './style.module.css';
import { TweetItem } from '../../Components';

const UserTweetList = ({ data, user }) => {
  const renderData = data?.map(item => (
    <TweetItem
      authorImg={user?.avatar}
      name={user?.name}
      tag={user?.account}
      key={item.id}
      liked={item.isLike}
      time='3小時'
      content={item.description}
      msgCount={item.replies}
      likesCount={item.likes}
      tweetID={item.id}
    />
  ));

  return <div className={styles.tweetList}>{renderData}</div>;
};
export default UserTweetList;
