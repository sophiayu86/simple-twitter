import React from 'react';
// import { Header, SideNav, UserCard } from "../../Components";
import styles from './style.module.css';
// import PopularList from "../../Lists/PopularList";
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
