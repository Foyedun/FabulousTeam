import React from 'react';

const Button = ({ style, children, onClick }) => {
  return (
    <button className={`${style}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
