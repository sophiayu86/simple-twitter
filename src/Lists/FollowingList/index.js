import React from 'react';
import styles from './style.module.css';
import { FollowItem } from '../../Components';

const FollowingList = ({ data }) => {
  return (
    <div className={styles.followingList}>
      {data.map(item => {
        return (
          <FollowItem
            key={item.followingId}
            id={item.followingId}
            name={item.name}
            avatar={item.avatar}
            content={item.introduction}
            following={item.isFollowing}
          />
        );
      })}
    </div>
  );
};
export default FollowingList;
