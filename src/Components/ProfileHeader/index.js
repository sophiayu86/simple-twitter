import React from "react";
import {  Link } from "react-router-dom";
import { ReactComponent as Back } from "../../Assets/icon/back.svg";
import styles from "./style.module.css";

const ProfileHeader = ({ text, num }) => {
  
  return (
    <div className={styles.profileheader}>
      <Link to="/main">
      <Back className={styles.icon} />
      </Link>
      <div>
      <p>{text}</p>
      <span>{num}推文</span>
      </div>
    </div>

  );
};
export default ProfileHeader;
