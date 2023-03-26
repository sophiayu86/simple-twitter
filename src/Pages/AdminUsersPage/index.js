import React from "react";
import { AdminNav, Header, AdminUserCard } from "../../Components";
import styles from "./style.module.css";

const AdminUserPage = () => {
  return (
    <div className={styles.AdminMainPage}>
      <AdminNav currentPage="admin_users" />
      <div className={styles.mainContent}>
        <Header text="使用者列表" />
        <div className={styles.contentList}>
          <AdminUserCard />
        </div>
      </div>
    </div>
  );
};
export default AdminUserPage;
