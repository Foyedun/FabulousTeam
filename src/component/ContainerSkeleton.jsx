import React from 'react'

const ContainerSkeleton = ({children}) => {
  return (
    <div className='w-full flex flex-col gap-5 items-center py-12 px-2 md:px-[10%]'>
      {children}
    </div>
  );
}

export default ContainerSkeleton