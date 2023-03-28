import React, { useState } from 'react';
import styles from './style.module.css';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent/index';

export default function PostTweetModal({ mode, avatar }) {
  const [showModal, setShowModal] = useState(false);

  return mode === 'button' ? (
    <>
      <button
        className={styles.openBtn}
        onClick={e => {
          e.stopPropagation();
          setShowModal(true);
        }}>
        推文
      </button>
      {showModal &&
        createPortal(
          <ModalContent
            avatar={avatar}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </>
  ) : (
    <>
      <div
        className={styles.card}
        onClick={e => {
          e.stopPropagation();
          setShowModal(true);
        }}>
        <div className={styles.title}>
          <div className={styles.avatar}>
            <img
              src={avatar}
              onError={e => (e.target.src = 'https://i.imgur.com/TGuHpHB.jpg')}
              alt=''
            />
          </div>
          <h5>有什麼新鮮事？</h5>
        </div>
        <div className={styles.footer}>
          <button className={styles.submitBtn}>推文</button>
        </div>
      </div>
      {showModal &&
        createPortal(
          <ModalContent
            avatar={avatar}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </>
  );
}
