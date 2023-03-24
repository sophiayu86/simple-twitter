import React from "react";
import { ReactComponent as ACIcon } from "../../Assets/icon/acIcon.svg";
import styles from "./style.module.css";

const PopularItem = ({ name, tag, following }) => {
  return (
    <div className={styles.popularItem}>
      <ACIcon className={styles.ACIcon} />
      <div>
        <p>{name}</p>
        <span>{tag}</span>
        
      </div>
      {following?<button className={styles.activeButton}>正在跟隨</button>:<button className={styles.button}>跟隨</button>}
    </div>
  );
};
export default PopularItem;
