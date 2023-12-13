import React from 'react'

const NotFound = () => {
  return (
    <div className='text-center p-5 md:p-10'>
      <h1 className='text-3xl md:text-6xl font-bold mb-4 text-green'>404 - Not Found</h1>
      <p className='text-lg text-gray-600 mb-4'>
        Sorry, the page you are looking for might be unavailable or does not
        exist.
      </p>
      <p className='text-lg text-gray-600'>
        Please check the URL or go back to the{' '}
        <a href='/' className='text-green'>
          homepage
        </a>
        .
      </p>
    </div>
  );
}

export default NotFound