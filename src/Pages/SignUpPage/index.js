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
  const [signupResult, setSignupResult] = useState('');

  const onHandlers = {
    handleOnChange: (inputName, value) => {
      if (inputName === 'name') {
        if (value.length > 50) return setInputInfo(prev => ({ ...prev, name: { status: 'error', message: '名稱請勿超過50個字', value } }));
        return setInputInfo(prev => ({ ...prev, name: { status: 'focus', message: `${value?.length}/50`, value } }));
      }

      if (inputName === 'checkPassword' && value !== inputInfo.password.value) {
        return setInputInfo(prev => ({ ...prev, checkPassword: { status: 'error', message: '確認密碼與密碼不符', value } }));
      }

      if (inputName === 'password') {
        if (value !== inputInfo.checkPassword.value) {
          return setInputInfo(prev => ({
            ...prev,
            password: { status: 'focus', message: '', value },
            checkPassword: { ...prev.checkPassword, status: 'error', message: '確認密碼與密碼不符' }
          }));
        } else {
          return setInputInfo(prev => ({
            ...prev,
            password: { status: 'focus', message: '', value },
            checkPassword: { ...prev.checkPassword, status: 'default', message: '' }
          }));
        }
      }
      return setInputInfo(prev => ({ ...prev, [inputName]: { status: 'focus', message: '', value } }));
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
      if (!value?.trim()) return setInputInfo(prev => ({ ...prev, [inputName]: { status: 'error', message: '欄位不可為空白', value: value } }));

      if (inputName === 'name' && value.length > 50) return setInputInfo(prev => ({ ...prev, name: { status: 'error', message: '名稱請勿超過50個字', value } }));

      if (inputName === 'checkPassword' && value !== inputInfo.password.value) {
        return setInputInfo(prev => ({ ...prev, checkPassword: { status: 'error', message: '確認密碼與密碼不符', value } }));
      }

      if (inputName === 'password' && inputInfo.checkPassword.value) {
        if (value !== inputInfo.checkPassword.value) {
          return setInputInfo(prev => ({
            ...prev,
            password: { status: 'default', message: '', value },
            checkPassword: { status: 'error', message: '確認密碼與密碼不符', ...prev.checkPassword }
          }));
        } else {
          return setInputInfo(prev => ({
            ...prev,
            password: { status: 'default', message: '', value },
            checkPassword: { status: 'default', message: '', ...prev.checkPassword }
          }));
        }
      }
      setInputInfo(prev => ({ ...prev, [inputName]: { status: 'default', message: '', value } }));
    }
  };

  const handleSubmit = async () => {
    for (const [key, info] of Object.entries(inputInfo)) {
      if (!info.value.trim()) setInputInfo(prev => ({ ...prev, [key]: { status: 'error', message: '欄位不可為空白', value: '' } }));
    }
    const { account, name, email, password, checkPassword } = inputInfo;
    if (!account.value || !name.value || !email.value || !password.value || !checkPassword.value) return;
    if (name.status === 'error' || password.status === 'error' || checkPassword.status === 'error') return;

    const result = await register({
      account: account.value,
      name: name.value,
      email: email.value,
      password: password.value,
      checkPassword: checkPassword.value
    });

    setSignupResult(result);
    if (result.status === 'success') {
      setTimeout(() => navigate('/login'), 1000);
    } else {
      setTimeout(() => setSignupResult(''), 1000);
    }
  };

  return (
    <div className={styles.signupPage}>
      {signupResult && (
        <div className={styles.notification}>
          <NotificationCard
            status={signupResult.status}
            message={signupResult.message}
          />
        </div>
      )}
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
