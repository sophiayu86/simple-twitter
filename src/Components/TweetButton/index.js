import React from 'react';
import styles from './style.module.css';

const TweetButton = ({ text }) => {
  return <div className={styles.TweetButton}>{text}</div>;
};
export default TweetButton;
