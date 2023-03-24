import React from "react";
import { AdminNav } from "../../Components";
import styles from './style.module.css';

const AdminMainPage = () => {
  return (
    <div className={styles.AdminMainPage}>
      <AdminNav />
      <div className={styles.middle}>AdminMainPage</div>
    </div>
  );
};
export default AdminMainPage;
