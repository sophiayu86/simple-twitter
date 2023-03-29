import React from 'react';
import FollowshipLayout from '../../Layout/FollowshipLayout';
import styles from './style.module.css';
import { useParams } from 'react-router-dom';

const UserFollowerPage = () => {
  const { userID } = useParams();
  return (
    <div className={styles.followerpage}>
      <FollowshipLayout userId={userID} />
    </div>
  );
};
export default UserFollowerPage;
