import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import { PopularItem } from '../../Components';
import { getRecommend } from '../../API/getRecommend';

const PopularList = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const usersData = await getRecommend();
    setUsers(usersData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.popularList}>
      <div className={styles.container}>
        <div className={styles.pageTitle}>
          <p>推薦跟蹤</p>
        </div>
        <div className={styles.followList}>
          {users?.map(user => {
            return (
              <PopularItem
                key={user.id}
                id={user.id}
                name={user.name}
                avatar={user.avatar}
                tag={'@' + user.account}
                following={user.isFollowing}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default PopularList;
