'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { memo } from 'react';

const menu = [
  { name: 'Главная', link: '/' },
  { name: 'Достиижения', link: '/achievements' },
  { name: 'Участники', link: '/group' },
  { name: 'Информация', link: '/info' },
];

export const Header = memo(() => {
  const pathname = usePathname();
  return (
    <header className=" bg-[#090912] relative rounded-xl py-5 px-5">
      <h1 className=" bottom-[75px] text-[40px] absolute">Россия</h1>
      <ul className="flex items-center gap-6 justify-start ">
        {menu.map(el => (
          <Link
            className={`no-underline ${
              pathname === el.link
                ? 'text-[#7d63d3]'
                : 'text-main hover:text-[#7d63d3] transition animate-pulse duration-150'
            }`}
            key={el.name}
            href={el.link}>
            <p className=" text-[19px] font-medium ">{el.name}</p>
          </Link>
        ))}
      </ul>
    </header>
  );
})
