import React from 'react';
import styles from './style.module.css';
import { TweetItem } from '../../Components';

const TweetList = ({ data }) => {
  const renderData = data?.map(item => (
    <TweetItem
      key={item.id}
      liked={item.isLike}
      name={item.User.name}
      tag={item.User.account}
      time='3小時'
      content={item.description}
      msgCount={item.replies}
      likesCount={item.likes}
      authorImg={item.User.avatar}
    />
  ));
  return <div className={styles.tweetList}>{renderData}</div>;
};
export default TweetList;
