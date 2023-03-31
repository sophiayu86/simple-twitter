import React from 'react';
import MainLayout from '../../Layout/MainLayout';
import styles from './style.module.css';
import { getAllReplies } from '../../API/getAllReplies';
import { getOneTweet } from '../../API/getOneTweet';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReplyPage = () => {
  const { tweetID } = useParams();
  const [tweetData, setTweetData] = useState([]);
  const [repliesData, setRepliesData] = useState([]);
  const [render, setRender] = useState(0);
  const handleRender = () => {
    setRender(prev => (prev += 1));
  };
  useEffect(() => {
    const getData = async () => {
      const [replies, tweet] = await Promise.all([getAllReplies(tweetID), getOneTweet(tweetID)]);
      setRepliesData(replies);
      setTweetData(tweet);
    };
    getData();
  }, [tweetID, render]);

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
        replyPageData={replyPageData}
      />
    </div>
  );
};
export default ReplyPage;
