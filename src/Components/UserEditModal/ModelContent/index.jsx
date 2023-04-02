import style from './style.module.css';
import { Input, NotificationCard } from '../../../Components/index.js';
import { ReactComponent as Cross } from '../../../Assets/icon/cross.svg';
import { ReactComponent as CoverEdit } from '../../../Assets/icon/coverEdit.svg';
import { ReactComponent as AvatarEdit } from '../../../Assets/icon/avatarEdit.svg';
import { useState } from 'react';
import { editUserProfile } from '../../../API/editUserProfile.js';
import { useAuth } from '../../../Context/AuthContext';

export default function ModalContent({ userData, handleRender, onClose }) {
  const { handleContextRender } = useAuth();
  const { id, name, introduction, avatar, cover } = userData;
  const initialInputInfo = {
    name: { status: 'default', message: `${name?.length}/50`, value: name },
    introduction: { status: 'default', message: `${introduction?.length}/160`, value: introduction !== 'null' ? introduction : '' }
  };
  const [inputInfo, setInputInfo] = useState(initialInputInfo);
  const [imagePrev, setImagePrev] = useState({ avatar, cover });
  const [imageFile, setImageFile] = useState({ avatar: '', cover: '' });
  const [updateResult, setUpdateResult] = useState(null);

  const handleImageChange = (e, setPrev, setFile) => {
    const { name } = e.target;
    const file = e.target.files?.[0]; // 取得選中檔案們的一個檔案
    const src = file ? window?.URL.createObjectURL(file) : imagePrev[name];
    setPrev(prev => ({ ...prev, [name]: src }));
    setFile(prev => ({ ...prev, [name]: file }));
  };
  const handleSubmit = async id => {
    const { name, introduction } = inputInfo;
    if (!name.value?.trim()) {
      return setInputInfo(prev => ({ ...prev, name: { status: 'error', message: '名稱不可為空白' } }));
    }
    if (name.value.trim().length > 50) {
      return setInputInfo(prev => ({ ...prev, name: { status: 'error', message: '不可超過50字', value: name.value } }));
    }
    if (introduction.value.trim().length > 160) {
      return setInputInfo(prev => ({ ...prev, introduction: { status: 'error', message: '不可超過160字', introduction: introduction.value } }));
    }
    if (name.status === 'error' || introduction.status === 'error') return;
    const formData = new FormData();
    formData.append('name', inputInfo.name.value);
    formData.append('introduction', inputInfo.introduction.value);
    formData.append('cover', imageFile.cover);
    formData.append('avatar', imageFile.avatar);
    const { data, ...result } = await editUserProfile({ id, formData }); //回傳值：{status: 'success', message: '檔案更新成功'}

    if (result) {
      setUpdateResult(result);
      if (result.status === 'success') {
        handleRender?.();
        handleContextRender?.();
        setTimeout(() => onClose(), 1000);
      } else {
        setTimeout(() => setUpdateResult(''), 1000);
      }
    }
  };
  const handleClose = e => {
    e.stopPropagation();
    onClose();
  };
  const onHandlers = {
    handleOnChange: (inputName, value) => {
      if (inputName === 'name') {
        if (value.length > 50) return setInputInfo(prev => ({ ...prev, name: { status: 'error', message: '不可超過50字', value } }));
        return setInputInfo(prev => ({ ...prev, name: { status: 'focus', message: `${value?.length}/50`, value } }));
      }

      if (inputName === 'introduction') {
        if (value.length > 160) return setInputInfo(prev => ({ ...prev, introduction: { status: 'error', message: '不可超過160字', value } }));
        return setInputInfo(prev => ({ ...prev, introduction: { status: 'focus', message: `${value?.length}/160`, value } }));
      }
    },
    handleOnFocus: (inputName, value) => {
      setInputInfo(prev => {
        return inputName === 'name'
          ? { ...prev, [inputName]: { status: 'focus', message: `${value?.length}/50`, value } }
          : { ...prev, [inputName]: { status: 'focus', message: `${value?.length}/160`, value } };
      });
    },
    handleOnBlur: (inputName, value) => {
      setInputInfo(prev => {
        if (inputName === 'name')
          return !value?.trim()
            ? { ...prev, [inputName]: { status: 'error', message: '名稱不可為空白', value } }
            : { ...prev, [inputName]: { status: 'default', message: `${value?.length}/50`, value } };
        return { ...prev, [inputName]: { status: 'default', message: `${value?.length}/160`, value } };
      });
    }
  };

  return (
    <div className={style.backDrop}>
      <div className={style.card}>
        <div className={style.header}>
          <Cross
            className={style.closeBtn}
            onClick={handleClose}
          />
          <h5 className={style.title}>編輯個人資料</h5>
          <button
            className={style.submitBtn}
            onClick={e => {
              e.stopPropagation();
              handleSubmit(id);
            }}>
            儲存
          </button>
        </div>
        <div className={style.images}>
          <label
            htmlFor='cover'
            className={style.cover}>
            <input
              type='file'
              name='cover'
              id='cover'
              onChange={e => handleImageChange(e, setImagePrev, setImageFile)}
            />
            <div className={style.coverBackDrop}></div>
            <img
              src={imagePrev.cover || 'https://i.imgur.com/vzIPCvD.png'}
              alt=''
              onError={e => (e.target.src = 'https://i.imgur.com/TGuHpHB.jpg')}
            />
            <CoverEdit className={style.editIcon} />
          </label>
          <label
            htmlFor='avatar'
            className={style.avatar}>
            <input
              type='file'
              name='avatar'
              id='avatar'
              onChange={e => handleImageChange(e, setImagePrev, setImageFile)}
            />
            <div className={style.avatarBackDrop}></div>
            <img
              src={imagePrev.avatar || 'https://i.imgur.com/TGuHpHB.jpg'}
              alt=''
              onError={e => (e.target.src = 'https://i.imgur.com/TGuHpHB.jpg')}
            />
            <div className={style.ring}></div>
            <AvatarEdit className={style.editIcon} />
          </label>
        </div>
        <div className={style.inputs}>
          <Input
            name={'name'}
            label={'名稱'}
            placeholder={'輸入你的暱稱'}
            status={inputInfo.name.status}
            message={inputInfo.name.message}
            value={inputInfo.name.value}
            onHandlers={onHandlers}
          />
          <Input
            name={'introduction'}
            label={'自我介紹'}
            type={'textarea'}
            status={inputInfo.introduction.status}
            message={inputInfo.introduction.message}
            value={inputInfo.introduction.value}
            onHandlers={onHandlers}
          />
        </div>
        {updateResult && (
          <div className={style.notification}>
            <div className={style.notiBackdrop}></div>
            <div className={style.notiContent}>
              <NotificationCard
                status={updateResult.status}
                message={updateResult.message}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
