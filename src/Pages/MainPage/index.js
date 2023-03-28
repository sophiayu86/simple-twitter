import React from 'react';
import styles from './style.module.css';
import MainLayout from '../../Layout/MainLayout';

const MainPage = () => {
  return (
    <div className={styles.mainpage}>
      <MainLayout
        header='首頁'
        tab='tweets'
      />
    </div>
  );
};
export default MainPage;
