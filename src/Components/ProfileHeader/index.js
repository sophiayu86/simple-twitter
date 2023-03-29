import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../Assets/icon/back.svg";
import styles from "./style.module.css";

const ProfileHeader = ({ text, num }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.profileheader}>
      <Back className={styles.icon} onClick={handleBack} />
      <div>
        <div className={styles.headerTitle}>{text}</div>
        <div className={styles.tweetNums}>{num}推文</div>
      </div>
    </div>
  );
};
export default ProfileHeader;
