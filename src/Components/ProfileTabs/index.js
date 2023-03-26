import React from "react";
import style from "./style.module.css";
const ProfileTabs = ({ currentTab, changeTab }) => {
  return (
    <nav className={style.tabs}>
      <div
        className={currentTab === "tweets" ? style.active : ""}
        onClick={() => changeTab("tweets")}
      >
        推文
      </div>
      <div
        className={currentTab === "replies" ? style.active : ""}
        onClick={() => changeTab("replies")}
      >
        回覆
      </div>
      <div
        className={currentTab === "likes" ? style.active : ""}
        onClick={() => changeTab("likes")}
      >
        喜歡的內容
      </div>
    </nav>
  );
};
export default ProfileTabs;
