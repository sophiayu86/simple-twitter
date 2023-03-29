import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../API/auth.js';
import styles from './style.module.css';
import { ReactComponent as ACIcon } from '../../Assets/icon/acIcon.svg';
import { NotificationCard, Input } from '../../Components';

const LoginPage = () => {
  const navigate = useNavigate();
  const initialInputInfo = {
    account: { status: 'default', message: '', value: '' },
    password: { status: 'default', message: '', value: '' }
  };
  const [inputInfo, setInputInfo] = useState(initialInputInfo);
  const [loginResult, setLoginResult] = useState('');
  const onHandlers = {
    handleOnChange: (inputName, value) => {
      setInputInfo(prev => {
        return {
          ...prev,
          [inputName]: { status: 'focus', message: '', value }
        };
      });
    },
    handleOnFocus: (inputName, value) => {
      setInputInfo(prev => {
        return {
          ...prev,
          [inputName]: { status: 'focus', message: '', value }
        };
      });
    },
    handleOnBlur: (inputName, value) => {
      setInputInfo(prev => {
        if (!value?.trim())
          return {
            ...prev,
            [inputName]: { status: 'error', message: '內容不可為空白', value }
          };
        return {
          ...prev,
          [inputName]: { status: 'default', message: '', value }
        };
      });
    }
  };
  const handleSubmit = async () => {
    for (const [key, eachInput] of Object.entries(inputInfo)) {
      if (!eachInput.value.trim()) {
        setInputInfo(prev => ({
          ...prev,
          [key]: { status: 'error', message: '內容不可為空白', value: '' }
        }));
      }
    }
    const accountValue = inputInfo.account.value;
    const passwordValue = inputInfo.password.value;
    if (!accountValue.trim() || !passwordValue.trim()) {
      setLoginResult({ status: 'error', message: '帳號及密碼不可為空白' });
      return setTimeout(() => setLoginResult(''), 1500);
    }

    const result = await login({
      account: accountValue,
      password: passwordValue
    });

    setLoginResult(result);
    if (result?.status === 'success') {
      localStorage.setItem('user-id', result.data?.user.id);
      localStorage.setItem('jwt-token', result.data?.token);
      setTimeout(() => navigate('/main'), 2000);
    } else {
      setTimeout(() => setLoginResult(''), 1500);
    }
  };
  return (
    <div className={styles.loginPage}>
      <div className={styles.notification}>
        {loginResult && (
          <NotificationCard
            status={loginResult.status}
            message={loginResult.message}
          />
        )}
      </div>
      <ACIcon className={styles.ACIcon} />
      <h3 className={styles.pageTitle}>登入 Alphitter</h3>
      <section className={styles.inputSection}>
        <Input
          label={'帳號'}
          name={'account'}
          type='text'
          placeholder={'請輸入使用者名稱'}
          onHandlers={onHandlers}
          status={inputInfo.account.status}
          message={inputInfo.account.message}
        />

        <Input
          label={'密碼'}
          name={'password'}
          type={'password'}
          placeholder={'請輸入密碼'}
          onHandlers={onHandlers}
          status={inputInfo.password.status}
          message={inputInfo.password.message}
        />
      </section>
      <section className={styles.signinControlloer}>
        <button
          className={styles.signinButton}
          onClick={handleSubmit}>
          登入
        </button>
        <div className={styles.links}>
          <Link
            to='/signup'
            className={styles.signupLink}>
            註冊
          </Link>
          <span>・</span>
          <Link
            to='/admin_login'
            className={styles.adminLogin}>
            後台登入
          </Link>
        </div>
      </section>
    </div>
  );
};
export default LoginPage;
