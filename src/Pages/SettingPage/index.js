import React from 'react';
import { Header, SideNav } from '../../Components';
import styles from './style.module.css';

const SettingPage=()=>{
    return(
        <div className={styles.settingpage}>
        <SideNav />
        <Header text="帳戶設定" />
    </div>
    )
}
export default SettingPage;