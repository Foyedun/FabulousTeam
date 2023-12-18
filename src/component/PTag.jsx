import React from 'react'

const PTag = ({children}) => {
  return (
    <p className='font-light w-full md:w-2/4 text-base text-grayText text-center mb-4'>{children}</p>
  )
}

export default PTag