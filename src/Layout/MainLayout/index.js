import React from 'react';
import { Header, SideNav } from '../../Components';
import PopularList from '../../Lists/PopularList';
import styles from './style.module.css';

const MainLayout=({header})=>{
    return(
    <div className={styles.userpage}>
        <SideNav />
        <Header text={header}/>
        {console.log("a",header)}
        <PopularList/>

    </div>
    )
}
export default MainLayout;