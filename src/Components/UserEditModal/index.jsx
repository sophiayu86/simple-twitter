import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModelContent';
import style from './style.module.css';

export default function UserEditModel(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className={style.editProfileBtn}
        onClick={e => {
          e.stopPropagation();
          setShowModal(true);
        }}>
        編輯個人資料
      </button>
      {showModal &&
        createPortal(
          <ModalContent
            {...props}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </>
  );
}
