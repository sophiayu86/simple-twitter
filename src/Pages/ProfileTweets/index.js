import React from 'react';
import { ProfileHeader, SideNav } from '../../Components';
import styles from './style.module.css';

const ProfileTweets=()=>{
    return(
    <div className={styles.userpage}>
        <SideNav />
        <ProfileHeader text="John" num="25"/>
    </div>
    )
}
export default ProfileTweets;