import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent/index';
import { ReactComponent as Talk } from '../../Assets/icon/talk.svg';
// import styles from "./style.module.css";

export default function PostReplyModal({ className, tweetId }) {
  //要回覆的貼文的資料
  const tweetInfo = {
    tweetId: '374', //------> 需要修正
    name: 'Apple',
    account: 'apple',
    avatar: 'https://i.imgur.com/TGuHpHB.jpg',
    createdAt: '3小時',
    description: 'voluptatatur quaertur quaerat consequatur idvoluptate aspernatur quaerat c id'
  };
  const signinUserAvatar = 'https://i.imgur.com/QljR8Ap.png';
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Talk
        onClick={e => {
          e.stopPropagation();
          setShowModal(true);
        }}
        className={className}
        style={{ cursor: 'pointer' }}
      />
      {showModal &&
        createPortal(
          <ModalContent
            tweetInfo={tweetInfo}
            signinUserAvatar={signinUserAvatar}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </>
  );
}
