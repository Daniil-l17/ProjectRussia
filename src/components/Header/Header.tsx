'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { memo } from 'react';

const menu = [
  { name: 'Главная', link: '/' },
  { name: 'Достижения', link: '/achievements' },
  { name: 'Сферы лидерства', link: '/longreads' },
  {name: 'Достижения Регионов',link: '/RegionalAchievements'}
];

export const Header = memo(() => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <header className=" bg-[#090912] flex items-center justify-between relative rounded-xl py-5 px-5">
      <h1 className=" bottom-[85px] text-[40px] absolute">Россия</h1>
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
      <button
        onClick={() => router.push('/achievements')}
        className=" bg-[#593052dc] transition duration-150 hover:bg-[#664661dc] rounded-xl px-4 py-3">
        Голосовать
      </button>
    </header>
  );
});
