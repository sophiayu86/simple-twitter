import React from "react";
import { AdminNav,Header } from "../../Components";
import AdminTweetList from "../../Lists/AdminTweetList";
import styles from './style.module.css';

const AdminMainPage = () => {
  return (
    <div className={styles.AdminMainPage}>
      <AdminNav />
      <div>
      <Header text="推文清單" />
      <AdminTweetList />
      </div>
    </div>
  );
};
export default AdminMainPage;
