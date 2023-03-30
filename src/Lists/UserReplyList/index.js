import React from 'react';
import styles from './style.module.css';
import { TweetItem } from '../../Components';

const UserReplyList = ({ data, user }) => {
  const renderData = data.length ? (
    data.map(item => (
      <TweetItem
        authorImg={user?.avatar}
        name={user?.name}
        tag={user?.account}
        key={item.id}
        time='3小時'
        reply={true}
        replyTarget={item.tweeterName}
        content={item.comment}
        tweetID={item.id}
      />
    ))
  ) : (
    <h5 className={styles.blank}>尚未回覆過推文</h5>
  );

  return <div className={styles.tweetList}>{renderData}</div>;
};
export default UserReplyList;
