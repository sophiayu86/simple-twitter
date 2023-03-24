import React from "react";
import { ReactComponent as ACIcon } from "../../Assets/icon/acIcon.svg";
import { ReactComponent as IndexIcon0 } from "../../Assets/icon/indexIcon0.svg";
import { ReactComponent as IndexIcon1 } from "../../Assets/icon/indexIcon1.svg";
import { ReactComponent as UserIcon0 } from "../../Assets/icon/userIcon0.svg";
import { ReactComponent as UserIcon1 } from "../../Assets/icon/userIcon1.svg";
import { ReactComponent as LogoutIcon } from "../../Assets/icon/logoutIcon.svg";
import styles from "./style.module.css";

const AdminNav = ({ currentPage }) => {
  return (
    // 每個 div 都要依照所屬頁面將 icon 與 span 文字變色。切換頁面時，變動 useState 的頁面，再以 props
    <div className={styles.AdminNav}>
      <ACIcon className={styles.ACIcon} />
      <div className={styles.sideNavItem}>
        {currentPage === "AdminMainPage" ? (
          <div className={styles.navItem}>
            <IndexIcon1 className={styles.smIcon} />
            <span className={styles.navItemText1}>推文清單</span>
          </div>
        ) : (
          <div className={styles.navItem}>
            <IndexIcon0 className={styles.smIcon} />
            <span className={styles.navItemText0}>推文清單</span>
          </div>
        )}
      </div>
      <div className={styles.sideNavItem}>
        {currentPage === "AdminUserPage" ? (
          <div className={styles.navItem}>
            <UserIcon1 className={styles.smIcon} />
            <span className={styles.navItemText1}>使用者列表</span>
          </div>
        ) : (
          <div className={styles.navItem}>
            <UserIcon0 className={styles.smIcon} />
            <span className={styles.navItemText0}>使用者列表</span>
          </div>
        )}
      </div>

      <div className={styles.sideNavItem}>
        <LogoutIcon className={styles.smIcon} />
        <span className={styles.navItemText}>登出</span>
      </div>
    </div>
  );
};

export default AdminNav;
