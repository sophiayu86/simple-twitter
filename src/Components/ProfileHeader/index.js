import React from "react";
import {  useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../Assets/icon/back.svg";
import styles from "./style.module.css";

const ProfileHeader = ({ text, num }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.profileheader}>
      <Back className={styles.icon} onClick={handleBack}/>
      <div>
      <p>{text}</p>
      <span>{num}推文</span>
      </div>
    </div>

  );
};
export default ProfileHeader;
