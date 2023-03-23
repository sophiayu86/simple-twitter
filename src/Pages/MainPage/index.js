import React from 'react';
import { Header, SideNav } from '../../Components';
import styles from './style.module.css';


const MainPage=()=>{
    return(
    <div className={styles.mainpage}>
        <SideNav />
        <Header text="首頁" />
    </div>
    )
}
export default MainPage;