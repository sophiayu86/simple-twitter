import React from "react";
import { Header, SideNav, UserCard } from "../../Components";
import styles from "./style.module.css";
import PopularList from "../../Lists/PopularList";

const MainPage = () => {
  return (
    <div className={styles.mainpage}>
      <SideNav />
      <div className={styles.middle}>
        <Header text="首頁" />
        <UserCard />
      </div>
      <PopularList />
    </div>
  );
};
export default MainPage;
