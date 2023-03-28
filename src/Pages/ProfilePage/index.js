import React from 'react';
import ProfileLayout from '../../Layout/ProfileLayout';
import { getUser } from '../../API/auth.js';
import { useEffect, useState } from 'react';
import { useParams } from'react-router-dom';
// import styles from './style.module.css';

const ProfilePage=()=>{
  const {userID} = useParams();
  const [userData, setUserData] = useState({});
  const getData = async () => {
    const user = await getUser(userID);
    setUserData(user.data);
    console.log("g",user.data);
  };
  useEffect(() => {
    getData();
  }, []);
    return(
    <div>
        <ProfileLayout user={userData}/>
    </div>
    )
}
export default ProfilePage;