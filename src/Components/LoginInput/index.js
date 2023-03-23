import React from "react";
import { useState } from "react";
import { ReactComponent as ACIcon } from "../../Assets/icon/acIcon.svg"; //相對路徑
import { login } from "../../API/auth.js";
import styles from "./style.module.css";

const LoginInput = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    console.log(account);
    console.log(password);
    if (account.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }

    const { success, authToken } = await login({
      account,
      password,
    });
    if (success) {
      localStorage.setItem("authToken", authToken);
    }
  };

  return (
    <div className={styles.loginInput}>
      <ACIcon className={styles.ACIcon} />
      <h1>登入 Alphitter</h1>
      <section className={styles.inputSection}>
        <div className={styles.inputHere}>
          <div className={styles.inputTitle}>帳號</div>
          <input
            type="text"
            placeholder="請輸入帳號"
            className={styles.inputText}
            onChange={(event) => setAccount(event.target.value)}
            value={account}
          ></input>
        </div>
        <div className={styles.inputHere}>
          <div className={styles.inputTitle}>密碼</div>
          <input
            type="text"
            placeholder="請輸入密碼"
            className={styles.inputText}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <div className={styles.loginButton} onClick={handleClick}>
          登入
        </div>
        <section>
          <a href="123" className={styles.register}>
            註冊
          </a>
          <span className={styles.midDot}>‧</span>
          <a href="123" className={styles.backStage}>
            後台登入
          </a>
        </section>
      </section>
    </div>
  );
};
export default LoginInput;
