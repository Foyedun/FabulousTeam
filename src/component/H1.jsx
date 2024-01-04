import React from 'react';

const H1 = ({ children, color='text-black' }) => {
  return <h1 className={`font-bold text-3xl text-center ${color}`}>{children}</h1>;
};

export default H1;
