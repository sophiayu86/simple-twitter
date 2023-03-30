import React from 'react';
import styles from './style.module.css';
import { TweetItem } from '../../Components';

const UserLikeList = ({ data }) => {
  const renderData = data.length ? (
    data.map(item => (
      <TweetItem
        key={item.id}
        tweetID={item.TweetId}
        liked={item.isLike}
        content={item.description}
        msgCount={item.replies}
        likesCount={item.likes}
        name={item.name}
        tag={item.account}
        authorImg={item.avatar}
        userID={item.tweeterId}
        time={item.tweetUpdatedAt}
      />
    ))
  ) : (
    <h5 className={styles.blank}>尚未按讚過推文</h5>
  );

  return <div className={styles.tweetList}>{renderData}</div>;
};
export default UserLikeList;
