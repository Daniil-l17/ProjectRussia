import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-8 bg-[#090912] mt-4 rounded-xl">
      <div></div>
      <span></span>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Image alt="footer" width={200} height={200} src={'/logo.svg'} />
          <h2 className=" text-[17px] font-medium ">©2023. Россия - страна достижений </h2>
        </div>
        <div className="flex text-xl flex-col gap-4">
          <a className=" text-white" href="">
            Вконтакте{' '}
          </a>
          <a className=" text-white" href="">
            Одноклассники{' '}
          </a>
          <a className=" text-white" href="">
            Телеграм{' '}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
