import React from 'react';
import styles from './style.module.css';
import ProfileLayout from '../../Layout/ProfileLayout';
import { getOneUser } from '../../API/getOneUser';
import { getUserTweets, getUserReplyTweets, getUserLikes } from '../../API/getUsersInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const ProfilePage = () => {
  const { userID } = useParams();
  const { signinUser } = useAuth();
  const [userData, setUserData] = useState(null);
  const [tweetsData, setTweetsData] = useState([]);
  const [repliesData, setRepliesData] = useState([]);
  const [likesData, setLikesData] = useState([]);
  const [render, setRender] = useState(0);
  const handleProfileRender = () => {
    setRender(prev => (prev += 1));
  };
  useEffect(() => {
    const getData = async () => {
      const [tweets, replies, likes, user] = await Promise.all([getUserTweets(userID), getUserReplyTweets(userID), getUserLikes(userID), getOneUser(userID)]);
      if (tweets.status === 'success') setTweetsData(tweets.data);
      if (replies.status === 'success') setRepliesData(replies.data);
      if (likes.status === 'success') setLikesData(likes.data);
      if (user.status === 'success') setUserData(user.data);
    };
    getData();
  }, [render, userID]);

  return (
    <div className={styles.profilePage}>
      <ProfileLayout
        signinUser={signinUser}
        user={userData}
        tweets={tweetsData}
        replies={repliesData}
        likes={likesData}
        handleRender={handleProfileRender}
      />
    </div>
  );
};
export default ProfilePage;
