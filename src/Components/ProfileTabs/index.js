import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';
const ProfileTabs=()=>{
    return(
        <nav className={style.tabs}>
                <div><Link to="/user">推文</Link></div>
                <div><Link to="/replied_tweets">回覆</Link></div>
                <div><Link to="/likes">喜歡的內容</Link></div>
        </nav>
    )
}
export default ProfileTabs;