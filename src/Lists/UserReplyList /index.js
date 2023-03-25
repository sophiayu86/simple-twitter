import React from "react";
import styles from "./style.module.css";
import { PopularItem } from "../../Components";

const PopularList = () => {
  
  return (
    <div className={styles.popularList}>
      <span className={styles.pageTitle}>
        推薦跟蹤
      </span>
      <section>
        <PopularItem name= "Pizza"  tag="@pizzahut" following={true}/>
        <PopularItem name= "Pizza"  tag="@pizzahut" following={false}/>
        </section>
      
    </div>
  );
};
export default PopularList;