import React from "react";
import styles from "./style.module.css";
import { ReactComponent as Reply } from "../../Assets/icon/reply.svg";
import { ReactComponent as Like } from "../../Assets/icon/like.svg";

const AdminUserCard = ({
  username,
  account,
  bgImg,
  avatar,
  tweets,
  likes,
  following,
  follower,
}) => {
  return (
    <div className={styles.AdminUserCard}>
      <div className={styles.bgImg}>{bgImg}背景圖片</div>
      <div className={styles.nameAndPhoto}>
        <div className={styles.avatar}>{avatar}大頭照</div>
        <div className={styles.nameAndId}>
          <span className={styles.username}>
            {username}
            Jane Cathy
          </span>
          <span className={styles.account}>{account}@cath1999</span>
        </div>
      </div>
      <div className={styles.rowAction}>
        <div className={styles.reply}>
          <Reply />
          <div className={styles.actionNumber}>{tweets}1.5K</div>
        </div>
        <div className={styles.like}>
          <Like />
          <div className={styles.actionNumber}>{likes}20K</div>
        </div>
      </div>

      <div className={styles.follow}>
        <div className={styles.follower}>
          <span className={"numberText"}>{following}34個</span>
          <span className={"followText"}>跟隨中</span>
        </div>
        <div className={styles.following}>
          <span className={"numberText"}>{follower}59個</span>
          <span className={"followText"}>跟隨者</span>
        </div>
      </div>
    </div>
  );
};
export default AdminUserCard;
