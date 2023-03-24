import React from 'react';
import { ProfileHeader, Tabs, SideNav } from '../../Components';
import PopularList from '../../Lists/PopularList';
import FollowerList from '../../Lists/FollowerList';
import FollowingList from '../../Lists/FollowingList';
import styles from './style.module.css';

const FollowshipLayout=({followers})=>{
    return(
    <div className={styles.userpage}>
        <SideNav />
        <div>
        <ProfileHeader text="John" num="25"/>
        <Tabs />
        {followers?<FollowerList />:<FollowingList />}
        </div>
        <PopularList/>

    </div>
    )
}
export default FollowshipLayout;