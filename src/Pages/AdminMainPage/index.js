import React from "react";
import { AdminNav,Header } from "../../Components";
import AdminTweetList from "../../Lists/AdminTweetList";
import styles from './style.module.css';

const AdminMainPage = () => {
  return (
    <div className={styles.AdminMainPage}>
      <AdminNav />
      <div className={styles.mainContent}>
      <Header text="推文清單" />
      <div className={styles.contentList}>
      <AdminTweetList />
      </div>
      </div>
    </div>
  );
};
export default AdminMainPage;
