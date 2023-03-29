import React from 'react';
import styles from './style.module.css';
import { getAllTweets } from '../../API/getAllTweets';
import { getOneUser } from '../../API/getOneUser';
import { useEffect, useState } from 'react';
import MainLayout from '../../Layout/MainLayout';
import { useAuth } from '../../Context/AuthContext';

const MainPage = () => {
  const { id } = useAuth().currentMember;
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

  return (
    <div className={styles.mainpage}>
      <MainLayout
        header='首頁'
        tab='tweets'
        data={tweetsData}
        user={userData}
        handleRender={handleRender}
      />
    </div>
  );
};
export default MainPage;
