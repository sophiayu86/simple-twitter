import React from 'react';
import styles from './style.module.css';
import { TweetItem } from '../../Components';

const TweetList = ({ data, handleRender, signinUser }) => {
  const renderData = data?.map(item => (
    <TweetItem
      key={item.id}
      liked={item.isLike}
      name={item.User.name}
      tag={item.User.account}
      time={item.updatedAt}
      content={item.description}
      msgCount={item.replies}
      likesCount={item.likes}
      authorImg={item.User.avatar}
      userID={item.User.id}
      tweetID={item.id}
      handleRender={handleRender}
      signinUser={signinUser}
    />
  ));
  return <div className={styles.tweetList}>{renderData}</div>;
};
export default TweetList;
