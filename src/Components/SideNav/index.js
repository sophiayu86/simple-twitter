import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ACIcon } from "../../Assets/icon/acIcon.svg";
import { ReactComponent as IndexIcon0 } from "../../Assets/icon/indexIcon0.svg";
import { ReactComponent as IndexIcon1 } from "../../Assets/icon/indexIcon1.svg";
import { ReactComponent as UserIcon0 } from "../../Assets/icon/userIcon0.svg";
import { ReactComponent as UserIcon1 } from "../../Assets/icon/userIcon1.svg";
import { ReactComponent as SettingIcon0 } from "../../Assets/icon/settingIcon0.svg";
import { ReactComponent as SettingIcon1 } from "../../Assets/icon/settingIcon1.svg";
import { ReactComponent as LogoutIcon } from "../../Assets/icon/logoutIcon.svg";
import styles from "./style.module.css";

const SideNav = ({ currentPage }) => {
  return (
    // 每個 div 都要依照所屬頁面將 icon 與 span 文字變色。切換頁面時，變動 useState 的頁面，再以 props
    <div className={styles.sideNav}>
      <ACIcon className={styles.ACIcon} />
      <div className={styles.sideNavItem} id="main">
        {currentPage === "main" ? (
          <div className={styles.navItem}>
            <IndexIcon1 className={styles.smIcon} />
            <span className={styles.navItemText1}>首頁</span>
          </div>
        ) : (
          <Link to="/main">
            <div className={styles.navItem}>
              <IndexIcon0 className={styles.smIcon} />
              <span className={styles.navItemText0}>首頁</span>
            </div>
          </Link>
        )}
      </div>
      <div className={styles.sideNavItem} id="user">
        {currentPage === "user" ? (
          <div className={styles.navItem}>
            <UserIcon1 className={styles.smIcon} />
            <span className={styles.navItemText1}>個人資料</span>
          </div>
        ) : (
          <Link to="/user">
            <div className={styles.navItem}>
              <UserIcon0 className={styles.smIcon} />
              <span className={styles.navItemText0}>個人資料</span>
            </div>
          </Link>
        )}
      </div>
      <div className={styles.sideNavItem} id="setting">
        {currentPage === "userSetting" ? (
          <div className={styles.navItem}>
            <SettingIcon1 className={styles.smIcon} />
            <span className={styles.navItemText1}>設定</span>
          </div>
        ) : (
          <Link to="/user/setting">
            <div className={styles.navItem}>
              <SettingIcon0 className={styles.smIcon} />
              <span className={styles.navItemText0}>設定</span>
            </div>
          </Link>
        )}
      </div>
      <button className={styles.makeTweet}>推文</button>
      <div className={styles.sideNavItem} id="logout">
        <LogoutIcon className={styles.smIcon} />
        <span className={styles.navItemText}>登出</span>
      </div>
    </div>
  );
};

export default SideNav;
