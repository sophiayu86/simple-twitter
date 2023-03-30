import React from 'react';
import { useAuth } from '../../Context/AuthContext';
import SettingLayout from '../../Layout/SettingLayout';
import styles from './style.module.css';

const SettingPage = () => {
  const { signinUser } = useAuth();
  const id = signinUser?.id;

  return (
    <div className={styles.settingPage}>
      <SettingLayout
        userData={signinUser}
        userId={id}
      />
    </div>
  );
};
export default SettingPage;
