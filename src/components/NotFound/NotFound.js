import React from "react";
import "./notfound.css";
import errorImg from "../../images/404.png";
const NotFound = () => {
  return (
    <div className="error-area">
      <img src={errorImg} alt="" />
    </div>
  );
};

export default NotFound;
