import React from 'react';

const FormInput = ({ htmlFor, labelText, type, name, id, placeHolder, value, onChange }) => {
  return (
    <div className='flex flex-col my-6'>
      <label htmlFor={htmlFor} className=''>
        {labelText}:
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeHolder}
        value={value || ''}
        onChange={onChange}
        className='py-2 px-6 mt-2 border border-lightGreen h-12.5 rounded-3xl outline-none'
        required
      />
    </div>
  );
};

export default FormInput;
