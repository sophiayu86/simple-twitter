import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import { FollowItem } from '../../Components';
import { getUserFollowings } from '../../API/getUsersInfo';

const FollowingList = ({ userId }) => {
  const [followings, setFollowings] = useState([]);
  const [render, setRender] = useState(0);
  const handleRender = () => {
    setRender(prev => (prev += 1));
  };
  useEffect(() => {
    const getData = async () => {
      const followingsData = await getUserFollowings(userId);
      if (followingsData.length) return setFollowings(followingsData);
    };
    getData();
  }, [userId, render]);

  return (
    <div className={styles.followingList}>
      {followings.length ? (
        followings.map(item => {
          return (
            <FollowItem
              key={item.followingId}
              id={item.followingId}
              name={item.name}
              avatar={item.avatar}
              content={item.introduction}
              following={item.isFollowing}
              handleRender={handleRender}
            />
          );
        })
      ) : (
        <h5 className={styles.blank}>尚未追隨其他使用者</h5>
      )}
    </div>
  );
};
export default FollowingList;
