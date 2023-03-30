import React from 'react';
import styles from './style.module.css';
import { TweetItem } from '../../Components';

const AdminTweetList = ({ data, handleRender }) => {
  const renderData = data?.map(item => (
    <TweetItem
      key={item.id}
      id={item.id}
      liked={item.isLike}
      name={item.User.name}
      tag={item.User.account}
      time={item.updatedAt}
      content={item.description}
      msgCount={item.replies}
      likesCount={item.likes}
      authorImg={item.User.avatar}
      handleRender={handleRender}
      admin={true}
    />
  ));
  return <div className={styles.tweetList}>{renderData}</div>;
};
export default AdminTweetList;
