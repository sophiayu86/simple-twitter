import React from 'react';
import styles from './style.module.css';
import { TweetItem } from '../../Components';

const UserReplyList = ({ data }) => {
  
  console.log("ohh",data);


const renderData = data?.map(item => (
  <TweetItem
    key={item.id}
    liked={item.isLike}
    // name={item.User.name}
    // tag={item.User.account}
    time='3小時'
    content={item.description}
    msgCount={item.replies}
    likesCount={item.likes}
    // authorImg={item.User.avatar}
    // userID={item.User.id}
    tweetID={item.id}
  />
));

  return <div className={styles.tweetList}>{renderData}</div>;
};
export default UserReplyList;
