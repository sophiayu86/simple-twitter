import React from "react";
import {  Link } from "react-router-dom";
import { ReactComponent as Back } from "../../Assets/icon/back.svg";
import styles from "./style.module.css";

const Header = ({ text }) => {
  
  return (
    <div className={styles.header}>
      {text !== "首頁" && text !== "帳戶設定" && text !== "推文清單"&& text !== "使用者列表"&& (
        <Link to="/main">
          <Back className={styles.icon}/>
          </Link>
       
      )}
      <span>{text}</span>
    </div>
  );
};
export default Header;
