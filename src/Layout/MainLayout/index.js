import React from "react";
import { Header, ReplyCard, SideNav, TweetCard } from "../../Components";
import PopularList from "../../Lists/PopularList";
import TweetList from "../../Lists/TweetList";
import ReplyList from "../../Lists/ReplyList";
import styles from "./style.module.css";
const MainLayout = ({ header, tab }) => {
  return (
    <div className={styles.userpage}>
      <SideNav currentPage="main" />
      <div className={styles.mainContent}>
        <Header text={header} />
        <div className={styles.contentList}>
          {tab === "tweets" && (
            <div>
              <TweetCard /> <TweetList />
            </div>
          )}
          {tab === "replies" && (
            <div>
              <ReplyCard
                name="Apple"
                tag="@apple"
                content="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt."
                time="上午 10:05・2021年11月10日"
              />
              <ReplyList />
            </div>
          )}
        </div>
      </div>
      <PopularList />
    </div>
  );
};
export default MainLayout;
