import React from 'react';
import styles from './style.module.css';
import { TweetItem } from '../../Components';


const ReplyList = ({ data, tweet }) => {
  const replyTarget = tweet?.User?.name;
  const renderData = data?.map(item => (
    <TweetItem
      key={item.id}
      reply='true'

      liked={item.isLike}
      name={item.User.name}
      tag={item.User.account}
      time='3小時'
      content={item.comment}
      msgCount={item.replies}
      likesCount={item.likes}
      authorImg={item.User.avatar}
      userID={item.User.id}
      tweetID={item.id}
      replyTarget={replyTarget}
    />
  ));
  return <div className={styles.tweetList}>{renderData}</div>;
};
export default ReplyList;
