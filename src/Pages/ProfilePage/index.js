import React from 'react';
import ProfileLayout from '../../Layout/ProfileLayout';
import { getOneUser } from '../../API/getOneUser';
import { getUserTweets, getUserReplyTweets, getUserLikes } from '../../API/getUsersInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import styles from './style.module.css';

const ProfilePage = () => {
  const { userID } = useParams();
  const [userData, setUserData] = useState({});
  const [tweetsData, setTweetsData] = useState([]);
  const [repliesData, setRepliesData] = useState([]);
  const [likesData, setLikesData] = useState([]);
  const [render, setRender] = useState(0);
  const handleRender = () => {
    setRender(prev => (prev += 1));
  };
  useEffect(() => {
    const getData = async () => {
      const [tweets, replies, likes, user] = await Promise.all([getUserTweets(userID), getUserReplyTweets(userID), getUserLikes(userID), getOneUser(userID)]);
      setTweetsData(tweets);
      setRepliesData(replies);
      setLikesData(likes);
      setUserData(user);
    };
    getData();
  }, [render, userID]);
  return (
    <div>
      <ProfileLayout
        user={userData}
        tweets={tweetsData}
        replies={repliesData}
        likes={likesData}
        handleRender={handleRender}
      />

    </div>
  );
};
export default ProfilePage;
