import Image from 'next/image'
import React from 'react'

export const ErrorServer = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <h2 className=' text-[26px] text-[#8b4242] font-semibold uppercase'>Ошибка сервера, данных нет....</h2>
      <Image alt='error' width={400} height={400} src={'/Hgg6JMF.png'} /> 
    </div>
  )
}

