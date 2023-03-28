import { AdminNav, Header } from '../../Components';
import AdminTweetList from '../../Lists/AdminTweetList';
import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { getAllTweets } from '../../API/getAllTweets';

const AdminMainPage = () => {
  const [tweetsData, setTweetsData] = useState([]);

  const [render, setRender] = useState(0);
  const handleRender = () => {
    setRender(prev => (prev += 1));
  };
  useEffect(() => {
    const getData = async () => {
      const res = await getAllTweets();
      setTweetsData(res.data);
    };
    console.log('MainLayout Render', render);
    getData();
  }, [render]);

  return (
    <div className={styles.AdminMainPage}>
      <AdminNav currentPage='admin_main' />
      <div className={styles.mainContent}>
        <Header text='推文清單' />
        <div className={styles.contentList}>
          <AdminTweetList
            handleRender={handleRender}
            data={tweetsData}
          />
        </div>
      </div>
    </div>
  );
};
export default AdminMainPage;
