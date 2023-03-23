import React from 'react';
import styles from './style.module.css';
import { LoginInput } from '../../Components';

const LoginPage=()=>{
    return(
    <div className={styles.loginpage}>
    <LoginInput />
    </div>
    )
}
export default LoginPage;