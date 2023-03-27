import React, { useState } from 'react';
import styles from './style.module.css';
import { ReactComponent as Cross } from '../../../Assets/icon/cross.svg';
import { postTweet } from '../../../API/postTweet.js';
import NotificationCard from '../../NotificationCard';

export default function ModalContent({ avatar, onClose }) {
  const initialDescription = { status: 'default', message: '', value: '' };
  const [description, setDescription] = useState(initialDescription);
  const [postResult, setPostResult] = useState(null);

  const handleSubmit = async e => {
    e.stopPropagation();
    if (!description.value?.trim())
      return setDescription(prev => ({
        ...prev,
        status: 'error',
        message: '推文不可為空白'
      }));
    if (description.status === 'error') return;
    const result = await postTweet({ description: description.value }); //回傳值：{status: 'success', message: '推文成功'}
    if (result) {
      setPostResult(result);
      if (result?.status === 'success') {
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
      }
    }
  };
  const handleClose = e => {
    e.stopPropagation();
    onClose();
  };
  const handleOnChange = value => {
    setDescription(prev => {
      return value.length > 140
        ? { ...prev, status: 'error', message: '不可超過140字', value }
        : { ...prev, status: 'default', message: '', value };
    });
  };

  return (
    <div className={styles.backDrop}>
      <div className={styles.card}>
        <div className={styles.header}>
          <Cross
            className={styles.closeBtn}
            onClick={handleClose}
          />
        </div>
        <div className={styles.input}>
          <img
            src={avatar}
            className={styles.avatar}
            alt=''
            onError={e => (e.target.src = 'https://i.imgur.com/TGuHpHB.jpg')}
          />
          <textarea
            name='description'
            id='description'
            className={styles.textarea}
            value={description.value}
            placeholder='有什麼新鮮事？'
            onChange={e => handleOnChange(e.target.value)}
          />
        </div>
        <div className={styles.footer}>
          <p className={description.status === 'error' ? styles.errorMessage : styles.message}>{description.message}</p>
          <button
            className={styles.submitBtn}
            onClick={handleSubmit}>
            推文
          </button>
        </div>
        {postResult && (
          <div className={styles.notification}>
            <div className={styles.notiBackdrop}></div>
            <div className={styles.notiContent}>
              <NotificationCard
                status={postResult?.status}
                message={postResult?.message}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
