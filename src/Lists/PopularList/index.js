import React from 'react';
import styles from './style.module.css';
import { PopularItem } from '../../Components';

const PopularList = () => {
  return (
    <div className={styles.popularList}>
      <div className={styles.pageTitle}>推薦跟蹤</div>
      <div className={styles.followList}>
        <PopularItem
          name='Pizza'
          tag='@pizzahut'
          following={true}
        />
        <PopularItem
          name='Pizza'
          tag='@pizzahut'
          following={false}
        />
      </div>
    </div>
  );
};
export default PopularList;
