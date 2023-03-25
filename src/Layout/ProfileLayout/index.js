import React from "react";
import {
  ProfileHeader,
  ProfileTabs,
  SideNav,
  UserCard,
} from "../../Components";
import PopularList from "../../Lists/PopularList";
import UserTweetList from "../../Lists/UserTweetList";
import UserReplyList from "../../Lists/UserReplyList";
import UserLikeList from "../../Lists/UserLikeList";
import styles from "./style.module.css";

const ProfileLayout = ({ tab }) => {
  return (
    <div className={styles.userpage}>
      <SideNav currentPage="user" />
      <div className={styles.mainContent}>
        <ProfileHeader text="John" num="25" />
        <div className={styles.contentList}>
          <UserCard />
          <ProfileTabs tab={tab} />
          {tab === "tweets" && <UserTweetList />}
          {tab === "replies" && <UserReplyList />}
          {tab === "likes" && <UserLikeList />}
        </div>
      </div>
      <PopularList />
    </div>
  );
};
export default ProfileLayout;
