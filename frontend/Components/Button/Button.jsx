import React from "react";
import Styles from "./Button.module.css";

const Button = ({ btnName, handleClick,icon,classStyle }) => {
  return (
    <div className={Styles.box}>
      <button className={`${Styles.button} ${classStyle}`} onClick={() => handleClick()}>
       {icon} {btnName}
      </button>
    </div>
  );
};

export default Button;
