import Image from 'next/image';
import { memo } from 'react';

export const Footer = memo(() => {
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
          <a className=" text-white" target='_blank' href="https://vk.com/dostizheniya_rf">
            Вконтакте{' '}
          </a>
          <a className=" text-white" target='_blank' href="https://ok.ru/group/70000002088964">
            Одноклассники{' '}
          </a>
          <a className=" text-white" target='_blank' href="https://t.me/dostizheniya_rf">
            Телеграм{' '}
          </a>
        </div>
      </div>
      <div>
        <h2 className=' text-sm text-[#525252aa] font-medium'>Информация взята с официального сайта Достижения.рф</h2>
      </div>
    </footer>
  );
})


