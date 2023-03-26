import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ACIcon } from "../../Assets/icon/acIcon.svg";
import { ReactComponent as IndexIcon0 } from "../../Assets/icon/indexIcon0.svg";
import { ReactComponent as IndexIcon1 } from "../../Assets/icon/indexIcon1.svg";
import { ReactComponent as UserIcon0 } from "../../Assets/icon/userIcon0.svg";
import { ReactComponent as UserIcon1 } from "../../Assets/icon/userIcon1.svg";
import { ReactComponent as LogoutIcon } from "../../Assets/icon/logoutIcon.svg";
import styles from "./style.module.css";

const AdminNav = ({ currentPage }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.sideNav}>
      <div className={styles.ACIconBlock}>
        <ACIcon />
      </div>
      <div onClick={() => navigate("/admin_main")} className={styles.navItem}>
        {currentPage === "admin_main" ? (
          <IndexIcon1 className={styles.selected} />
        ) : (
          <IndexIcon0 />
        )}
        <span>推文清單</span>
      </div>
      <div onClick={() => navigate("/admin_users")} className={styles.navItem}>
        {currentPage === "admin_users" ? (
          <UserIcon1 className={styles.selected} />
        ) : (
          <UserIcon0 />
        )}
        <span>使用者列表</span>
      </div>
      <div className={styles.logout}>
        <LogoutIcon style={{ marginRight: "8px" }} />
        <span className={styles.navItemText}>登出</span>
      </div>
    </div>
  );
};

export default AdminNav;
