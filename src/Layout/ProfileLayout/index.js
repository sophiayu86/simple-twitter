import React from 'react';
import { ProfileHeader, ProfileTabs, SideNav, UserCard } from '../../Components';
import PopularList from '../../Lists/PopularList';
import styles from './style.module.css';

const ProfileLayout=()=>{
    return(
    <div className={styles.userpage}>
        <SideNav />
        <div>
        <ProfileHeader text="John" num="25"/>
        <UserCard />
        <ProfileTabs />
        </div>
        <PopularList/>

    </div>
    )
}
export default ProfileLayout;