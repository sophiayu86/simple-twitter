import React from 'react';
import styles from './style.module.css';
import { FollowItem } from '../../Components';

const FollowerList = ({ data }) => {
  return (
    <div className={styles.followerList}>
      {data.map(item => {
        return (
          <FollowItem
            key={item.followerId}
            id={item.followerId}
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
export default FollowerList;
