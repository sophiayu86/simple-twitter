import React from 'react';
import MainLayout from '../../Layout/MainLayout';
import styles from './style.module.css';
import { getAllReplies, getUser, getTweet} from '../../API/auth.js';
import { useEffect, useState } from 'react';
import { useParams } from'react-router-dom';

const ReplyPage=()=>{
    const {tweetID} = useParams();
    const [tweetsData, setTweetsData] = useState([]);
    const [tweetData, setTweetData] = useState([]);
    const [userData, setUserData] = useState({});
    const getData = async () => {
      const [replies, tweet, user] = await Promise.all([getAllReplies(tweetID), getTweet(tweetID), getUser(14)]);
      setTweetsData(replies.data);
      setTweetData(tweet.data);
    //   console.log("data",tweetsData);
      setUserData(user.data);
      
    };
    useEffect(() => {
      getData();
    }, []);
    return(
        <div className={styles.replypage}>
        <MainLayout header="推文" tab="replies" data={tweetsData} reply={tweetData} user={userData}/>
    </div>
    )
}
export default ReplyPage;