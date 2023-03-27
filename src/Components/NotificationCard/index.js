import React from 'react';
import { ReactComponent as ErrorIcon } from '../../Assets/icon/notificationIcons/error.svg';
import { ReactComponent as WarningIcon } from '../../Assets/icon/notificationIcons/warning.svg';
import { ReactComponent as InfoIcon } from '../../Assets/icon/notificationIcons/info.svg';
import { ReactComponent as SuccessIcon } from '../../Assets/icon/notificationIcons/success.svg';
import styles from './style.module.css';

const NotificationCard = ({ status, message }) => {
  let icon = '';
  let circleStyle = {};
  if (status === 'error') {
    icon = <ErrorIcon />;
    circleStyle = { boxShadow: '0px 0px 0px 2px #FC5A5A' };
  }
  if (status === 'warning') {
    icon = <WarningIcon />;
    circleStyle = { boxShadow: '0px 0px 0px 2px #FFC542' };
  }
  if (status === 'info') {
    icon = <InfoIcon />;
    circleStyle = { boxShadow: '0px 0px 0px 2px #50B5FF' };
  }
  if (status === 'success') {
    icon = <SuccessIcon />;
    circleStyle = { boxShadow: '0px 0px 0px 2px #82C43C' };
  }

  return (
    <div className={styles.notiCard}>
      <span className={styles.message}>{message}</span>
      <span
        className={styles.icon}
        style={circleStyle}>
        {icon}
      </span>
    </div>
  );
};
export default NotificationCard;
