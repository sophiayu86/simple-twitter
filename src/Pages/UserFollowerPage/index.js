import React from 'react';
import FollowshipLayout from '../../Layout/FollowshipLayout';
import styles from './style.module.css';

const UserFollowerPage=()=>{
    return(
    <div className={styles.followerpage}>
        <FollowshipLayout followers={true}/>
    </div>
    )
}
export default UserFollowerPage;