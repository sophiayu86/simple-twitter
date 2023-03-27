import React from 'react';
import style from './style.module.css';
const ProfileTabs = ({ data, currentTab, changeTab }) => {
  const renderTabs = data.map(item => (
    <div
      key={item.label}
      className={currentTab === item.value ? style.active : ''}
      onClick={() => changeTab(item.value)}>
      {item.label}
    </div>
  ));
  return <nav className={style.tabs}>{renderTabs}</nav>;
};
export default ProfileTabs;
