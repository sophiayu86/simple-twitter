import React from "react";
import { ProfileHeader, Tabs, SideNav } from "../../Components";
import PopularList from "../../Lists/PopularList";
import FollowerList from "../../Lists/FollowerList";
import FollowingList from "../../Lists/FollowingList";
import styles from "./style.module.css";

const FollowshipLayout = ({ followers }) => {
  return (
    <div className={styles.userpage}>
      <SideNav />
      <div className={styles.mainContent}>
        <ProfileHeader text="John" num="25" />
        <Tabs />
        <div className={styles.contentList}>
          {followers ? <FollowerList /> : <FollowingList />}
        </div>
      </div>
      <PopularList />
    </div>
  );
};
export default FollowshipLayout;
