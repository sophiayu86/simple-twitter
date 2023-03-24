import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const UserCard = () => {
  return (
    <div className={styles.UserCard}>
      <div className={styles.bgImg}></div>
      <div className={styles.avatar}></div>
      <div className={styles.userActions}>
        {isMe? <button>編輯個人資料</button>:3/24 這裡要放 icon}
      </div>
      <div className={styles.username}>Jane Cathy</div>
      <div className={styles.account}>iamjane1999</div>
      <div className={styles.description}>Hello this is a pen how are you</div>
      <div className={styles.followship}>
        <span className={styles.following}>231 個跟隨中</span>
        <span className={styles.follower}>45位跟隨者</span>
      </div>
      <div className={styles.infoZone}></div>
    </div>
  );
};

export default UserCard;
