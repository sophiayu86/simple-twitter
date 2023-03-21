import React from 'react';
import {ReactComponent as ACIcon} from "../../Assets/icon/acIcon.svg"; //相對路徑
import {ReactComponent as IndexIcon} from "../../Assets/icon/indexIcon.svg"; //相對路徑
import {ReactComponent as UserIcon} from "../../Assets/icon/userIcon.svg"; //相對路徑
import {ReactComponent as SettingIcon} from "../../Assets/icon/settingIcon.svg"; //相對路徑
import {ReactComponent as LogoutIcon} from "../../Assets/icon/logoutIcon.svg"; //相對路徑
import styles from './style.module.css';

const SideNav = ()=>{
return(
  // 每個 div 都要依照所屬頁面將 icon 與 span 文字變色。切換頁面時，變動 useState 的頁面，再以 props
  <div className={styles.sideNav}>
    <ACIcon className={styles.ACIcon}/>
    <div className={styles.sideNavItem} id="index0"><IndexIcon className={styles.smIcon}/><span className={styles.navItemText}>首頁</span></div>
    <div className={styles.sideNavItem} id="user0"><UserIcon className={styles.smIcon}/><span className={styles.navItemText}>個人資料</span></div>
    <div className={styles.sideNavItem} id="setting0"><SettingIcon className={styles.smIcon}/><span className={styles.navItemText}>設定</span></div>
    <div className={styles.makeTweet}>推文</div>
    <div className={styles.sideNavItem} id="logout"><LogoutIcon className={styles.smIcon}/><span className={styles.navItemText}>登出</span></div>
  </div>
)
};

export default SideNav;