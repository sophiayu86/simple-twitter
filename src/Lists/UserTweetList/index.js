import React from "react";
import styles from "./style.module.css";
import { TweetItem } from "../../Components";
import { useEffect, useState } from 'react';
import { getUserTweets } from '../../API/auth.js';
const UserTweetList = (id) => {
  
  const [tweetsData, setTweetsData] = useState([]);
  const getData = async () => {
    const res = await getUserTweets(id);
    setTweetsData(res.data);
    console.log("f",tweetsData);
  };
  useEffect(() => {
    getData();
  }, []);

  const renderData = tweetsData?.map(item => (
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
      userID={item.User.id}
      tweetID={item.id}
    />));

    return <div className={styles.tweetList}>{renderData}</div>;
};
export default UserTweetList;