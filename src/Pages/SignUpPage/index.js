import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../API/auth.js';
import styles from './style.module.css';
import { ReactComponent as ACIcon } from '../../Assets/icon/acIcon.svg';
import { NotificationCard, Input } from '../../Components';

const SignUpPage = () => {
  const navigate = useNavigate();
  const initialInputInfo = {
    account: { status: 'default', message: '', value: '' },
    name: { status: 'default', message: '', value: '' },
    email: { status: 'default', message: '', value: '' },
    password: { status: 'default', message: '', value: '' },
    checkPassword: { status: 'default', message: '', value: '' }
  };
  const [inputInfo, setInputInfo] = useState(initialInputInfo);
  const onHandlers = {
    handleOnChange: (inputName, value) => {
      setInputInfo(prev => {
        if (inputName === 'name') {
          return value.length > 50
            ? { ...prev, [inputName]: { status: 'error', message: '名稱請勿超過50個字', value } }
            : { ...prev, [inputName]: { status: 'focus', message: `${value?.length}/50`, value } };
        }
        if (inputName === 'password' && inputInfo.checkPassword.value) {
          return value === inputInfo.checkPassword.value
            ? {
                ...prev,
                password: { status: 'focus', message: '', value },
                checkPassword: { status: 'default', message: '', value }
              }
            : {
                ...prev,
                password: { status: 'focus', message: '', value },
                checkPassword: { status: 'error', message: '確認密碼與密碼不符', value }
              };
        }
        if (inputName === 'checkPassword' && value !== inputInfo.password.value) {
          return { ...prev, checkPassword: { status: 'error', message: '確認密碼與密碼不符', value } };
        }
        return { ...prev, [inputName]: { status: 'focus', message: '', value } };
      });
    },
    handleOnFocus: (inputName, value) => {
      setInputInfo(prev => {
        if (inputName === 'name') {
          return value.length > 50
            ? { ...prev, [inputName]: { status: 'error', message: '名稱請勿超過50個字', value } }
            : { ...prev, [inputName]: { status: 'focus', message: `${value?.length}/50`, value } };
        }
        return { ...prev, [inputName]: { status: 'focus', message: '', value } };
      });
    },
    handleOnBlur: (inputName, value) => {
      setInputInfo(prev => {
        if (!value?.trim()) return { ...prev, [inputName]: { status: 'error', message: '所有欄位皆不可為空白', value } };
        if (inputName === 'name' && value.length > 50) return { ...prev, name: { status: 'error', message: '名稱請勿超過50個字', value } };
        if (inputName === 'checkPassword') {
          return value === inputInfo.password.value
            ? { ...prev, [inputName]: { status: 'default', message: '', value } }
            : { ...prev, checkPassword: { status: 'error', message: '確認密碼與密碼不符', value } };
        }
        if (inputName === 'password' && inputInfo.checkPassword.value) {
          return value === inputInfo.checkPassword.value
            ? {
                ...prev,
                password: { status: 'default', message: '', value },
                checkPassword: { status: 'default', message: '', value }
              }
            : {
                ...prev,
                password: { status: 'default', message: '', value },
                checkPassword: { status: 'error', message: '確認密碼與密碼不符', value }
              };
        }
        return { ...prev, [inputName]: { status: 'default', message: '', value } };
      });
    }
  };

  const [signupResult, setSignupResult] = useState('');
  const handleSubmit = async () => {
    for (const [key, info] of Object.entries(inputInfo)) {
      if (!info.value.trim()) setInputInfo(prev => ({ ...prev, [key]: { status: 'error', message: '所有欄位皆不可為空白', value: '' } }));
    }
    const { account, name, email, password, checkPassword } = inputInfo;
    if (!account.value || !name.value || !email.value || !password.value || !checkPassword.value) return setSignupResult({ status: 'error', message: '欄位空白無法送出' });

    const result = await register({
      account: account.value,
      name: name.value,
      email: email.value,
      password: password.value,
      checkPassword: checkPassword.value
    });
    setSignupResult(result);
    if (result.status === 'success') {
      setTimeout(() => navigate('/login'), 2000);
    }
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.notification}>
        {signupResult.status ? (
          <NotificationCard
            status={signupResult.status}
            message={signupResult.message}
          />
        ) : (
          ''
        )}
      </div>
      <ACIcon className={styles.ACIcon} />
      <h3 className={styles.pageTitle}>建立你的帳號</h3>
      <section className={styles.inputSection}>
        <Input
          label={'帳號'}
          name={'account'}
          type='text'
          placeholder={'請輸入帳號'}
          onHandlers={onHandlers}
          status={inputInfo.account.status}
          message={inputInfo.account.message}
        />
        <Input
          label={'名稱'}
          name={'name'}
          type={'text'}
          placeholder={'請輸入使用者名稱'}
          onHandlers={onHandlers}
          status={inputInfo.name.status}
          message={inputInfo.name.message}
        />
        <Input
          label={'Email'}
          name={'email'}
          type={'email'}
          placeholder={'請輸入Email'}
          onHandlers={onHandlers}
          status={inputInfo.email.status}
          message={inputInfo.email.message}
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
        <Input
          label={'確認密碼'}
          name={'checkPassword'}
          type={'password'}
          placeholder={'請再次輸入密碼'}
          onHandlers={onHandlers}
          status={inputInfo.checkPassword.status}
          message={inputInfo.checkPassword.message}
        />
      </section>
      <section className={styles.signupControlloer}>
        <button
          className={styles.signupButton}
          onClick={handleSubmit}>
          註冊
        </button>
        <Link
          to='/login'
          className={styles.backLink}>
          取消
        </Link>
      </section>
    </div>
  );
};
export default SignUpPage;
