import React from 'react';
import MainLayout from '../../Layout/MainLayout';
import styles from './style.module.css';

const ReplyPage = () => {
  return (
    <div className={styles.replypage}>
      <MainLayout
        header='推文'
        tab='replies'
      />
    </div>
  );
};
export default ReplyPage;
