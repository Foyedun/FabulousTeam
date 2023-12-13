import React from 'react'

const Button = ({
  bgColor,
  textColor,
  height,
  width,
  radius,
  text,
  lScreen = 'md:w-1/5',
  onClick,
}) => {
  return (
    <button
      className={`${bgColor} ${textColor} ${height} ${width} ${radius} ${lScreen}`}
      onClick={onClick}>
      {text}
    </button>
  );
};




export default Button