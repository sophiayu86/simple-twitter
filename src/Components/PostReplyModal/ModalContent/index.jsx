import React, { useState } from 'react';
import styles from './style.module.css';
import { ReactComponent as Cross } from '../../../Assets/icon/cross.svg';
import { postReply } from '../../../API/postReply.js';
import NotificationCard from '../../NotificationCard';

export default function ModalContent({ tweetInfo, onClose, signinUser, handleRender }) {
  const { tweetId, name, account, avatar, updatedAt, description } = tweetInfo;
  const initialComment = { status: 'default', message: '', value: '' };
  const [comment, setComment] = useState(initialComment);
  const [postResult, setPostResult] = useState(null);

  const handleSubmit = async e => {
    e.stopPropagation();
    if (!comment.value?.trim()) return setComment(prev => ({ ...prev, status: 'error', message: '回覆不可為空白' }));
    if (comment.status === 'error') return;

    const result = await postReply({ tweetId, comment: comment.value }); //回傳值：{status: 'success', message: '回覆成功'}
    if (result) {
      setPostResult(result);
      if (result?.status === 'success') {
        handleRender();
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
    setComment(prev => {
      return value.length > 140 ? { ...prev, status: 'error', message: '回覆不可超過140字', value } : { ...prev, status: 'default', message: '', value };
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
        <div className={styles.tweetInfo}>
          <div className={styles.leftPart}>
            <img
              src={avatar ? avatar : 'https://i.imgur.com/TGuHpHB.jpg'}
              className={styles.avatar}
              alt=''
            />
            <span className={styles.connectLine}></span>
          </div>
          <div className={styles.rightPart}>
            <div className={styles.title}>
              <span className={styles.name}>{name}</span>
              <span className={styles.subInfo}>
                @{account}・{updatedAt}
              </span>
            </div>
            <p className={styles.description}>{description}</p>
            <p className={styles.subInfo}>
              回覆給 <span style={{ color: '#FF6600' }}>@{account}</span>
            </p>
          </div>
        </div>
        <div className={styles.input}>
          <img
            src={signinUser.avatar ? signinUser.avatar : 'https://i.imgur.com/TGuHpHB.jpg'}
            className={styles.avatar}
            alt=''
          />
          <textarea
            name='comment'
            id='comment'
            className={styles.textarea}
            value={description.value}
            placeholder='推你的回覆'
            onChange={e => handleOnChange(e.target.value)}
          />
        </div>
        <div className={styles.footer}>
          <p className={comment.status === 'error' ? styles.errorMessage : styles.message}>{comment.message}</p>
          <button
            className={styles.submitBtn}
            onClick={handleSubmit}>
            回覆
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
