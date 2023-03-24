import React from "react";
import { useState } from "react";
import { ReactComponent as Noti0 } from "../../Assets/icon/noti0.svg";
import { ReactComponent as Noti1 } from "../../Assets/icon/noti1.svg";
import { ReactComponent as Msg } from "../../Assets/icon/msg.svg";
import styles from "./style.module.css";

const UserCard = ({
  username,
  account,
  intro,
  following,
  follower,
  isMe,
  noti,
}) => {
  return (
    <div className={styles.UserInfo}>
      <div className={styles.bgImg}>背景</div>
      <div className={styles.avatar}>大頭暫時黑框</div>

      <div className={styles.userActions}>
        {isMe ? (
          <button className={styles.editMyProfile}>編輯個人資料</button>
        ) : (
          <section>
            <Msg className={styles.Msg} />
            {noti ? (
              <Noti1 className={styles.Noti1} />
            ) : (
              <Noti0 className={styles.Noti0} />
            )}
            <div className={styles.followButton}>正在跟隨</div>
          </section>
        )}
      </div>
      <div className={styles.nameandaccount}>
        <span className={styles.username}>
          {username}
          Jane Cathy
        </span>
        <span className={styles.account}>{account}@cath1999</span>
      </div>

      <div className={styles.intro}>
        {intro}"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      </div>
      <div className={styles.followship}>
        <span className={styles.following}>{following} 個跟隨中</span>
        <span className={styles.follower}>{follower} 位跟隨者</span>
      </div>
    </div>
  );
};

export default UserCard;
