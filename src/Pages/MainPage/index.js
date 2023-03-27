import React from 'react';
import styles from './style.module.css';
import MainLayout from '../../Layout/MainLayout';

import { useAuth } from '../../Context/AuthContext';


const MainPage = () => {
  const { currentMember } = useAuth();
 
 
  return (
    <div className={styles.mainpage}>
      <MainLayout
        header='首頁'
        tab='tweets'
        currentMember={currentMember}
      />
    </div>
  );
};
export default MainPage;
