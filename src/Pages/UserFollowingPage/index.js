import React from 'react';
import FollowshipLayout from '../../Layout/FollowshipLayout';
import styles from './style.module.css';

const UserFollowingPage=()=>{
    return(
    <div className={styles.followingpage}>
        <FollowshipLayout />
    </div>
    )
}
export default UserFollowingPage;