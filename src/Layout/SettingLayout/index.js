import React, { useEffect, useState } from 'react';
import { editUserAccoount } from '../../API/editUserAccoount';
import { Header, Input, SideNav, NotificationCard } from '../../Components';
import styles from './style.module.css';
import { useAuth } from '../../Context/AuthContext';

const SettingLayout = ({ userData, userId }) => {
  const { handleContextRender } = useAuth();
  const [editResult, setEditResult] = useState('');
  const [inputInfo, setInputInfo] = useState(null);
  useEffect(() => {
    if (!userData) return;
    const { account, name, email } = userData;
    setInputInfo({
      account: { status: 'default', message: '', value: account },
      name: { status: 'default', message: '', value: name },
      email: { status: 'default', message: '', value: email },
      password: { status: 'default', message: '', value: '' },
      checkPassword: { status: 'default', message: '', value: '' }
    });
  }, [userData]);

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
        if (inputName === 'account' || inputName === 'name' || inputName === 'email') {
          if (!value?.trim()) return { ...prev, [inputName]: { status: 'error', message: '所有欄位皆不可為空白', value } };
        }
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

  const handleSubmit = async () => {
    const { account, name, email, password, checkPassword } = inputInfo;
    if (!account.value?.trim() || !name.value?.trim() || !email.value?.trim()) {
      setInputInfo(prev => ({
        ...prev,
        account: { status: 'error', message: '此欄位不可為空白', value: '' },
        name: { status: 'error', message: '此欄位不可為空白', value: '' },
        email: { status: 'error', message: '此欄位不可為空白', value: '' }
      }));
      setEditResult({ status: 'error', message: '帳號、名稱、Email欄位不可為空白' });
      return setTimeout(() => setEditResult(''), 1000);
    }

    const { data, ...result } = await editUserAccoount({
      id: userId,
      account: account.value,
      name: name.value,
      email: email.value,
      password: password.value,
      checkPassword: checkPassword.value
    });

    if (result) {
      setEditResult(result);
      if (result.status === 'success') {
        handleContextRender?.();
      }
      setTimeout(() => setEditResult(''), 1000);
    }
  };

  return (
    <div className={styles.settingPage}>
      <SideNav currentPage='userSetting' />
      <div className={styles.mainContent}>
        <Header text='帳戶設定' />
        {inputInfo && (
          <section className={styles.inputSection}>
            <Input
              label={'帳號'}
              name={'account'}
              type='text'
              placeholder={'請輸入使用者名稱'}
              onHandlers={onHandlers}
              value={inputInfo.account.value}
              status={inputInfo.account.status}
              message={inputInfo.account.message}
            />
            <Input
              label={'名稱'}
              name={'name'}
              type={'text'}
              placeholder={'請輸入使用者名稱'}
              onHandlers={onHandlers}
              value={inputInfo.name.value}
              status={inputInfo.name.status}
              message={inputInfo.name.message}
            />
            <Input
              label={'Email'}
              name={'email'}
              type={'email'}
              placeholder={'請輸入Email'}
              onHandlers={onHandlers}
              value={inputInfo.email.value}
              status={inputInfo.email.status}
              message={inputInfo.email.message}
            />
            <Input
              label={'密碼'}
              name={'password'}
              type={'password'}
              placeholder={'請輸入密碼'}
              onHandlers={onHandlers}
              value={inputInfo.password.value}
              status={inputInfo.password.status}
              message={inputInfo.password.message}
            />
            <Input
              label={'確認密碼'}
              name={'checkPassword'}
              type={'password'}
              placeholder={'請再次輸入密碼'}
              onHandlers={onHandlers}
              value={inputInfo.checkPassword.value}
              status={inputInfo.checkPassword.status}
              message={inputInfo.checkPassword.message}
            />
          </section>
        )}
        <section className={styles.formControl}>
          <button
            className={styles.btn}
            onClick={handleSubmit}>
            儲存
          </button>
        </section>
      </div>

      {editResult && (
        <div className={styles.notification}>
          <div className={styles.notiBackdrop}></div>
          <div className={styles.notiContent}>
            <NotificationCard
              status={editResult?.status}
              message={editResult?.message}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default SettingLayout;
