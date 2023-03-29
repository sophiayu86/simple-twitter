import React from 'react';
import MainLayout from '../../Layout/MainLayout';
import styles from './style.module.css';
import { getAllReplies } from '../../API/getAllReplies';
import { getOneTweet } from '../../API/getOneTweet';
import { getOneUser } from '../../API/getOneUser';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const ReplyPage = () => {
  const userId = useAuth().currentMember.id;
  const { tweetID } = useParams();
  const [userData, setUserData] = useState({});
  const [tweetData, setTweetData] = useState([]);
  const [repliesData, setRepliesData] = useState([]);
  const [render, setRender] = useState(0);
  const handleRender = () => {
    setRender(prev => (prev += 1));
  };
  useEffect(() => {
    const getData = async () => {
      const [replies, tweet, user] = await Promise.all([getAllReplies(tweetID), getOneTweet(tweetID), getOneUser(userId)]);
      setRepliesData(replies);
      setTweetData(tweet);
      setUserData(user);
    };
    getData();
  }, [userId, tweetID, render]);

  const replyPageData = {
    tweet: tweetData,
    replies: repliesData,
    handleRender
  };

  return (
    <div className={styles.replypage}>
      <MainLayout
        header='推文'
        tab='replies'
        user={userData}
        replyPageData={replyPageData}
      />

    </div>
  );
};
export default ReplyPage;
