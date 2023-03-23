import React, { useEffect } from "react";
// import styles from './style.module.css';
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, [navigate]);
  return <div>HomePage redirect to login or main</div>;
};
export default HomePage;
