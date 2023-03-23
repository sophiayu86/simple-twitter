import React from 'react';
import { ProfileHeader, SideNav } from '../../Components';
import styles from './style.module.css';

const UserFollowerPage=()=>{
    return(
    <div className={styles.followerpage}>
        <SideNav />
        <ProfileHeader text="John" num="25"/>
    </div>
    )
}
export default UserFollowerPage;