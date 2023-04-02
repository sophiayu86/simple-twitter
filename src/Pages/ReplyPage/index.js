import React from "react";
import MainLayout from "../../Layout/MainLayout";
import styles from "./style.module.css";
import { getAllReplies } from "../../API/getAllReplies";
import { getOneTweet } from "../../API/getOneTweet";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReplyPage = () => {
  const { tweetID } = useParams();
  const [tweetData, setTweetData] = useState({ avatar: "", likes: 0 });
  const [repliesData, setRepliesData] = useState();
  const [render, setRender] = useState(0);
  const handleRender = () => {
    setRender((prev) => (prev += 1));
  };
  useEffect(() => {
    const getData = async () => {
      const [replies, tweet] = await Promise.all([
        getAllReplies(tweetID),
        getOneTweet(tweetID),
      ]);
      if (replies) {
        setRepliesData(replies);
      }
      if (tweet) {
        setTweetData(tweet);
      }
    };
    getData();
  }, [tweetID, render]);

  return (
    <div className={styles.replypage}>
      <MainLayout
        header="推文"
        tab="replies"
        replyPageData={{
          tweet: tweetData,
          replies: repliesData,
          handleRender,
        }}
      />
    </div>
  );
};
export default ReplyPage;
