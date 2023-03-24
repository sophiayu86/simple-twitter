import React from 'react';
import { ProfileHeader, Tabs, SideNav } from '../../Components';
import PopularList from '../../Lists/PopularList';
import styles from './style.module.css';

const FollowshipLayout=()=>{
    return(
    <div className={styles.userpage}>
        <SideNav />
        <div>
        <ProfileHeader text="John" num="25"/>
        <Tabs />
        </div>
        <PopularList/>

    </div>
    )
}
export default FollowshipLayout;