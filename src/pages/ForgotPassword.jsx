import React, { useState } from 'react';
import FormInput from '@/component/FormInput.jsx';
import { formField } from '@/constant/index.js';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ email: '' });
  const emailField = formField.signup.find((field) => field.id === 'email');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value.trim() }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className='flex flex-col  h-screen w-full p-2'>
        <h1 className='font-semibold my-4 text-center text-xl md:text-3xl'>
          Request New Password
        </h1>
        <form className='w-full md:w-2/3 mx-auto'>
          {emailField && (
            <FormInput
              htmlFor={emailField.htmlFor}
              labelText={emailField.labelText}
              id={emailField.id}
              placeHolder={emailField.placeHolder}
              type={emailField.type}
              name={emailField.name}
              key={emailField.id}
              value={formData[emailField.name]}
              onChange={handleChange}
            />
          )}
          <button
            className={`${
              formData.email.trim() === '' ? 'bg-lightGreen' : 'bg-green'
            } text-white rounded-full h-12.5 w-full`}
            onClick={handleSubmit}
            disabled={formData.email.trim() === ''}>
            Get Verification Code{' '}
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
