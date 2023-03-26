import React from 'react';
import { useState } from 'react';
import styles from './style.module.css';

const Input = ({ label, name, type, placeholder, status, message, value, onHandlers }) => {
  const handleOnChange = onHandlers?.handleOnChange;
  const handleOnFocus = onHandlers?.handleOnFocus;
  const handleOnBlur = onHandlers?.handleOnBlur;
  const [inputValue, setInputValue] = useState(value || '');
  const inputStyle = status === 'focus' ? styles.inputFocus : status === 'error' ? styles.inputError : styles.inputDefault;
  return (
    <div className={styles.inputField}>
      <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
        {type === 'textarea' ? (
          <textarea
            name={name}
            id={name}
            rows='4'
            className={inputStyle}
            value={inputValue}
            onChange={e => {
              setInputValue(e.target.value);
              handleOnChange?.(name, e.target.value);
            }}
            onFocus={e => handleOnFocus?.(name, e.target.value)}
            onBlur={e => handleOnBlur?.(name, e.target.value)}
          />
        ) : (
          <input
            className={inputStyle}
            type={type || 'text'}
            value={inputValue}
            placeholder={placeholder}
            onChange={e => {
              setInputValue(e.target.value);
              handleOnChange?.(name, e.target.value);
            }}
            onFocus={e => handleOnFocus?.(name, e.target.value)}
            onBlur={e => handleOnBlur?.(name, e.target.value)}
          />
        )}
      </div>
      <p className={status === 'error' ? styles.errorMessage : styles.focusMessage}>{message}</p>
    </div>
  );
};
export default Input;
