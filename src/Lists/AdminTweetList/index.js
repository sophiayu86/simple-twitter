import React from "react";
import styles from "./style.module.css";
import { TweetItem } from "../../Components";

const AdminTweetList = () => {
  
  return (
    <div className={styles.tweetList}>
 
        <TweetItem admin="true" name= "Pizza"  tag="@pizzahut" time="3小時" content="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "/>
        

      
    </div>
  );
};
export default AdminTweetList;