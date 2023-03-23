import React from 'react';
import { Header, SideNav } from '../../Components';
import PopularList from '../../Lists/PopularList';
import styles from './style.module.css';


const MainPage=()=>{
    return(
    <div className={styles.mainpage}>
        <SideNav />
        <Header text="首頁" />
        <PopularList />
    </div>
    )
}
export default MainPage;