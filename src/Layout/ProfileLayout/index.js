import React, { useState } from "react";
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

const tabsList = [
  { label: "推文", value: "tweets" },
  { label: "回覆", value: "replies" },
  { label: "喜歡的內容", value: "likes" },
];

const ProfileLayout = ({user}) => {
  const [tab, setTab] = useState("tweets");
  const userID = user?.id;
  console.log(userID);
  return (
    <div className={styles.userpage}>
      <SideNav currentPage="user" />
      <div className={styles.mainContent}>
        <ProfileHeader text={user?.account} num={user?.tweets} />
        <div className={styles.contentList}>
          <UserCard user={user} />
          <ProfileTabs data={tabsList} currentTab={tab} changeTab={setTab} />
          {tab === "tweets" && <UserTweetList id={userID} />}
          {tab === "replies" && <UserReplyList id={userID} />}
          {tab === "likes" && <UserLikeList id={userID} />}
        </div>
      </div>
      <PopularList />
    </div>
  );
};
export default ProfileLayout;
