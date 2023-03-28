import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent/index';
import { ReactComponent as Talk } from '../../Assets/icon/talk.svg';
import { getOneTweet } from '../../API/getOneTweet';

export default function PostReplyModal({ className, tweetId, signinUser, handelRender }) {
  const [tweetInfo, setTweetInfo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const handleOnClick = async e => {
    e.stopPropagation();
    const data = await getOneTweet({ tweetId });
    if (data) {
      const { User, id, description, updatedAt } = data;
      setTweetInfo({
        tweetId: id,
        name: User.name,
        account: User.account,
        avatar: User.avatar,
        updatedAt: updatedAt,
        description: description
      });
      setShowModal(true);
    }
  };

  return (
    <>
      <Talk
        onClick={e => handleOnClick(e)}
        className={className}
        style={{ cursor: 'pointer' }}
      />
      {showModal &&
        createPortal(
          <ModalContent
            tweetInfo={tweetInfo}
            onClose={() => setShowModal(false)}
            signinUser={signinUser}
            handelRender={handelRender}
          />,
          document.body
        )}
    </>
  );
}
