import React from 'react';
import {ReactComponent as ACIcon} from "../../Assets/icon/acIcon.svg"; //相對路徑
import styles from './style.module.css';
const LoginInput=()=>{
    return(
    <div className={styles.loginInput}>
        <ACIcon className={styles.ACIcon}/>
        <h1>登入 Alphitter</h1>
        <section className = {styles.inputSection}>
            <div className={styles.inputHere}>
                <div className={styles.inputTitle}>帳號</div>
                <input type="text" placeholder="請輸入帳號" className={styles.inputText}></input>
            </div>
            <div className={styles.inputHere}>
                <div className={styles.inputTitle}>密碼</div>
                <input type="text" placeholder="請輸入密碼" className={styles.inputText}></input>
            </div>
            <div className={styles.loginButton}>登入</div>
            <section><span className={styles.register}>註冊</span><span className={styles.midDot}>‧</span><span href="" className={styles.backStage}>後台登入</span></section>
        </section>
    </div>
    )
}
export default LoginInput;