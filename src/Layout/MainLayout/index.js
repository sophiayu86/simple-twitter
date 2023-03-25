import React from 'react';
import { Header, SideNav, TweetCard } from '../../Components';
import PopularList from '../../Lists/PopularList';
import TweetList from '../../Lists/TweetList';
import ReplyList from '../../Lists/ReplyList';
import styles from './style.module.css';
const MainLayout=({header, tab})=>{
    return(
    <div className={styles.userpage}>
        <SideNav />
        <div className={styles.mainContent}>
            <Header text={header}/>
            <div className={styles.contentList}>
                <TweetCard />
                {tab==="tweets"&& <TweetList/>}
                {tab==="replies"&& <ReplyList/>}
            </div>
        </div>
        <PopularList/>
    </div>
    )
}
export default MainLayout;