import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Back } from '../../Assets/icon/back.svg';
import styles from './style.module.css';

const Header = ({ text }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.header}>
      {text !== '首頁' &&
        text !== '帳戶設定' &&
        text !== '推文清單' &&
        text !== '使用者列表' && (
          <Back
            className={styles.icon}
            onClick={handleBack}
          />
        )}
      <span>{text}</span>
    </div>
  );
};
export default Header;
