import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import { FollowItem } from '../../Components';
import { getUserFollowers } from '../../API/getUsersInfo';

const FollowerList = ({ userId }) => {
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const followersData = await getUserFollowers(userId);
      setFollowers(followersData);
    };
    getData();
  }, [userId]);

  return (
    <div className={styles.followerList}>
      {followers.map(item => {
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
