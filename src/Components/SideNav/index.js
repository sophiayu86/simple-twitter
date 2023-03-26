import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ACIcon } from '../../Assets/icon/acIcon.svg';
import { ReactComponent as IndexIcon0 } from '../../Assets/icon/indexIcon0.svg';
import { ReactComponent as IndexIcon1 } from '../../Assets/icon/indexIcon1.svg';
import { ReactComponent as UserIcon0 } from '../../Assets/icon/userIcon0.svg';
import { ReactComponent as UserIcon1 } from '../../Assets/icon/userIcon1.svg';
import { ReactComponent as SettingIcon0 } from '../../Assets/icon/settingIcon0.svg';
import { ReactComponent as SettingIcon1 } from '../../Assets/icon/settingIcon1.svg';
import { ReactComponent as LogoutIcon } from '../../Assets/icon/logoutIcon.svg';
import styles from './style.module.css';
import { PostTweetModal } from '../../Components';
const SideNav = ({ currentPage }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };
  return (
    <div className={styles.sideNav}>
      <div className={styles.ACIconBlock}>
        <ACIcon />
      </div>
      <div onClick={() => navigate('/main')} className={styles.navItem}>
        {currentPage === 'main' ? <IndexIcon1 className={styles.selected} /> : <IndexIcon0 />}
        <span>首頁</span>
      </div>
      <div onClick={() => navigate('/profile')} className={styles.navItem}>
        {currentPage === 'user' ? <UserIcon1 className={styles.selected} /> : <UserIcon0 />}
        <span>個人資料</span>
      </div>
      <div onClick={() => navigate('/user/setting')} className={styles.navItem}>
        {currentPage === 'userSetting' ? <SettingIcon1 className={styles.selected} /> : <SettingIcon0 />}
        <span>設定</span>
      </div>
      <PostTweetModal mode={'button'} />
      <div className={styles.logout} onClick={handleLogout}>
        <LogoutIcon style={{ marginRight: '8px' }} />
        <span className={styles.navItemText}>登出</span>
      </div>
    </div>
  );
};

export default SideNav;
