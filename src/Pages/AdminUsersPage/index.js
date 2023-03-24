import React from "react";
import { AdminNav, AdminUserCard } from "../../Components";
import styles from "./style.module.css";

const AdminUsersPage = () => {
  return (
    <div className={styles.AdminUsersPage}>
      <AdminNav />
      <div className={styles.AllAdminUserCards}>
        <AdminUserCard />
      </div>
    </div>
  );
};
export default AdminUsersPage;
