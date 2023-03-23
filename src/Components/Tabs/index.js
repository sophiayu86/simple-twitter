import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
const Tabs = () => {
  return (
    <nav className={style.tabs}>
      <div>
        <Link to="/">追蹤者</Link>
      </div>
      <div>
        <Link to="/">正在追蹤</Link>
      </div>
    </nav>
  );
};
export default Tabs;
