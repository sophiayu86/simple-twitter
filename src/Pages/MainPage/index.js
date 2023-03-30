import React from 'react';
import styles from './style.module.css';
import { getAllTweets } from '../../API/getAllTweets';
import { useEffect, useState } from 'react';
import MainLayout from '../../Layout/MainLayout';
import { useAuth } from '../../Context/AuthContext';

const MainPage = () => {
  const { isAuthenticated } = useAuth();
  const [tweetsData, setTweetsData] = useState([]);
  const [render, setRender] = useState(0);
  const handleRender = () => {
    setRender(prev => (prev += 1));
  };
  useEffect(() => {
    const getData = async () => {
      const tweets = await getAllTweets();
      setTweetsData(tweets);
    };
    if (isAuthenticated) getData();
  }, [isAuthenticated, render]);

  const mainPageData = {
    tweets: tweetsData,
    handleRender: handleRender
  };

  return (
    <div className={styles.mainpage}>
      <MainLayout
        header='首頁'
        tab='tweets'
        mainPageData={mainPageData}
      />
    </div>
  );
};
export default MainPage;
