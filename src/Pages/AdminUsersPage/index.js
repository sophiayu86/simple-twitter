import React from 'react';
import { useEffect, useState } from 'react';
import { AdminNav, Header, AdminUserCard } from '../../Components';
import styles from './style.module.css';
import { getAdminUserCard } from '../../API/AdminUserCardAPI.js';

const AdminUserPage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUserDataAsync = async () => {
      try {
        const userCard = await getAdminUserCard();
        setUserData(userCard);
      } catch (error) {
        console.log('資料提取失敗');
      }
    };
    getUserDataAsync();
  }, []);

  const displayAllCards = userData?.map(user => (
    <AdminUserCard
      key={user.id}
      userData={user}
    />
  ));

  return (
    <div className={styles.AdminUsersPage}>
      <AdminNav currentPage='admin_users' />
      <div className={styles.mainContent}>
        <Header text='使用者列表' />
        <div className={styles.contentList}>{displayAllCards}</div>
      </div>
    </div>
  );
};
export default AdminUserPage;
