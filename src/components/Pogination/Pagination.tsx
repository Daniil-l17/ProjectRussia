'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const poginationNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const Pagination = ({ setActive, active }: { setActive: (el: number) => void; active: number }) => {
  const activePage = poginationNumber;

  useEffect(() => {
    window.scroll(0, 0);
    sessionStorage.setItem('num',JSON.stringify(active))
  }, [active]);

  const next = () => active !== Math.max(...activePage) && setActive(active + 1)
  const prev = () => active !== Math.min(...activePage) && setActive(active - 1);

  return (
    <div className="flex justify-center mt-8">
      <ul className="flex gap-7 ">
        <button onClick={prev}>
          {' '}
          <ArrowLeft />
        </button>
        {activePage.map((el, index) => (
          <li
            className={`${
              active === el ? 'bg-[#342767a2]' : 'bg-[#1d1831a2] '
            } w-10 h-10 flex justify-center cursor-pointer items-center rounded-[20px]`}
            key={index}
            onClick={() => setActive(el)}>
            {el}
          </li>
        ))}
        <button onClick={next}>
          <ArrowRight />
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
