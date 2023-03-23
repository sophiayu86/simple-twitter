import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ACIcon } from "../../Assets/icon/acIcon.svg";
import { login } from "../../API/auth.js";
import styles from "./style.module.css";

const LoginInput = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    console.log("輸入 accout 為", account);
    console.log("輸入 password 為", password);
    if (account.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }

    const { token } = await login({
      account,
      password,
    });

    if (token) {
      localStorage.setItem("authToken", token);
    }
  };

  return (
    <div className={styles.loginInput}>
      <ACIcon className={styles.ACIcon} />
      <span className={styles.pageTitle}>
        <h3>登入 Alphitter</h3>
      </span>
      <section className={styles.inputSection}>
        <div className={styles.input}>
          <div className={styles.Label}>帳號</div>
          <input
            type="text"
            placeholder="請輸入帳號"
            className={styles.inputText}
            onChange={(event) => {
              setAccount(event.target.value);
            }}
            value={account}
          ></input>
          <div className={styles.bottomLine}></div>
        </div>

        <div className={styles.input}>
          <div className={styles.Label}>密碼</div>
          <input
            type="password"
            placeholder="請輸入密碼"
            className={styles.inputText}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <div className={styles.bottomLine}></div>
        </div>
        <button className={styles.loginButton} onClick={handleClick}>
          登入
        </button>
        <section>
          <Link to="/signup" className={styles.register}>
            註冊
          </Link>
          <span className={styles.midDot}>‧</span>
          <Link to="/admin_login" className={styles.backStage}>
            後台登入
          </Link>
        </section>
      </section>
    </div>
  );
};
export default LoginInput;
