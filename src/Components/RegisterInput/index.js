import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ACIcon } from "../../Assets/icon/acIcon.svg";
import { register } from "../../API/auth.js";
import styles from "./style.module.css";

const RegisterInput = () => {
  const [account, setAccount] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const handleClick = async () => {
    if (username.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }
    if (email.length === 0) {
      return;
    }

    if (password !== checkPassword) {
      alert("密碼確認不一致！請重新輸入！");
      return;
    }

    // const { success, authToken } = await register({
    //   account,
    //   username,
    //   email,
    //   password,
    //   checkPassword,
    // });
    // if (success) {
    //   localStorage.setItem("authToken", authToken);

    //   return;
    // }

    const data = await register({
      account,
      username,
      email,
      password,
      checkPassword,
    });
    if (data) {
      console.log(data);

      return;
    }
  };

  return (
    <div className={styles.loginInput}>
      <ACIcon className={styles.ACIcon} />
      <span className={styles.pageTitle}>
        <h3>建立你的帳號</h3>
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
          <div className={styles.Label}>名稱</div>
          <input
            type="text"
            placeholder="請輸入使用者名稱"
            className={styles.inputText}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            value={username}
          ></input>
          <div className={styles.bottomLine}></div>
        </div>

        <div className={styles.input}>
          <div className={styles.Label}>Email</div>
          <input
            type="text"
            placeholder="請輸入 Email"
            className={styles.inputText}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
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

        <div className={styles.input}>
          <div className={styles.Label}>密碼再次確認</div>
          <input
            type="password"
            placeholder="請再次輸入密碼"
            className={styles.inputText}
            value={checkPassword}
            onChange={(event) => setCheckPassword(event.target.value)}
          ></input>
          <div className={styles.bottomLine}></div>
        </div>

        <button className={styles.loginButton} onClick={handleClick}>
          註冊
        </button>
        <section>
          <Link to="/login" className={styles.backStage}>
            取消
          </Link>
        </section>
      </section>
    </div>
  );
};
export default RegisterInput;
