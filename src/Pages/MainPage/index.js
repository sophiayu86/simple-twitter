import React from 'react';
// import { Header, SideNav, UserCard } from "../../Components";
import styles from './style.module.css';
import { getAllTweets, getUser } from '../../API/auth.js';
import { useEffect, useState } from 'react';
import MainLayout from '../../Layout/MainLayout';

const MainPage = () => {
  const [tweetsData, setTweetsData] = useState([]);
  const [userData, setUserData] = useState({});
  const getData = async () => {
    const [res, user] = await Promise.all([getAllTweets(), getUser(14)]);
    setTweetsData(res.data);
    setUserData(user.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.mainpage}>
      <MainLayout
        header='首頁'
        tab='tweets'
        data={tweetsData}
        user={userData}
      />
    </div>
  );
};
export default MainPage;
