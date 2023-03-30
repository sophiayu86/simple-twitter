import React, { useState, useEffect } from 'react';
import FollowshipLayout from '../../Layout/FollowshipLayout';
import styles from './style.module.css';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../../API/getOneUser';

const UserFollowerPage = () => {
  const { userID } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getData = async () => {
      const { data } = await getOneUser(userID);
      const { name, account, tweets, avatar } = data;
      setUser(prev => ({ ...prev, name, account, tweets, avatar }));
    };
    getData();
  }, [userID]);

  return (
    <div className={styles.followerpage}>
      {user && (
        <FollowshipLayout
          user={user}
          userID={userID}
        />
      )}
    </div>
  );
};
export default UserFollowerPage;
