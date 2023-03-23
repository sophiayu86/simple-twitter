import React from 'react';
import { Header, SideNav } from '../../Components';
import styles from './style.module.css';

const ReplyPage=()=>{
    return(
        <div className={styles.replypage}>
        <SideNav />
        <Header text="推文" />
    </div>
    )
}
export default ReplyPage;