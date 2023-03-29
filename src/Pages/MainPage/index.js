
import React from 'react';
import styles from './style.module.css';
import { getAllTweets } from '../../API/getAllTweets';
import { getOneUser } from '../../API/getOneUser';
import { useEffect, useState } from 'react';
import MainLayout from '../../Layout/MainLayout';
import { useAuth } from '../../Context/AuthContext';

const MainPage = () => {
  const id = useAuth().currentMember?.id;
  const [tweetsData, setTweetsData] = useState([]);
  const [userData, setUserData] = useState({});
  const [render, setRender] = useState(0);
  const handleRender = () => {
    setRender(prev => (prev += 1));
  };
  useEffect(() => {
    const getData = async () => {
      const [tweets, user] = await Promise.all([getAllTweets(), getOneUser(id)]);
      setTweetsData(tweets);
      setUserData(user);
    };
    getData();
  }, [render, id]);

  const mainPageData = {
    tweets: tweetsData,
    handleRender: handleRender
  };

  return (
    <div className={styles.mainpage}>
      <MainLayout
        header='首頁'
        tab='tweets'
        user={userData}
        mainPageData={mainPageData}
      />

    </div>
  );
};
export default MainPage;
