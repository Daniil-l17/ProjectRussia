'use client';

import Loading from '@/components/Loading/Loading';
import { axiosServers } from '@/servers/Servers';
import { Achivment } from '@/types/Achivments';
import { useEffect, useState } from 'react';

import Pagination from '@/components/Pogination/Pagination';
import { ErrorServer } from '@/components/Error/ErrorServer';
import Link from 'next/link';



const Achievements = () => {
  const [data, setData] = useState<Achivment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setEror] = useState(false);
  const [active, setActive] = useState(1)

  console.log(active)
  
  
  useEffect(() => {
    const fun = async (active: number) => {
      setLoading(true);
      try {
        const resp = await axiosServers.GetAchievements(active);
        setData(resp);
      } catch (e) {
        setEror(true);
      } finally {
        setLoading(false);
      }
    };
    fun(active);
  }, [active]);

  return (
    <section className="bg-[#090912] rounded-2xl mt-5 py-7 px-8">
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorServer />
      ) : (
        <div className="flex flex-col">
          <h2 className=" text-[45px] text-[#dddbdb] cursor-pointer uppercase font-mediun mb-4">
            Главные Достижения Современной России
          </h2>
          <div className="flex justify-center">
            <span className=" mb-7 bg-[#7f7f909e] w-[92%] h-[1px]"></span>
          </div>
          <ul className="flex gap-8 flex-wrap ">
            {data.map(el => (
              <Link href={`/achievements/${el.id}`} key={el.id}>
                <li
                  style={{
                    backgroundImage: `url('${el.main_image}')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                  className=" w-[350px] rounded-2xl relative cursor-pointer h-[320px]">
                  <span className="py-10 px-6  absolute right-0 left-0 bottom-0 top-0 bg-[#11111169] rounded-2xl hover:bg-[#cac9c931] transition duration-100">
                    <h3 className=" text-white text-[28px] text-inherit font-semibold">
                      {el.title}
                    </h3>
                    <p className=" w-[280px] text-white font-medium text-[17px] mt-3 z-10 relative">
                      {el.subtitle}
                    </p>
                    {/*                  <p>{dayjs(new Date(el.publishedon)).fromNow()}</p>*/}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
          <Pagination active={active} setActive={setActive} />
        </div>
      )}
    </section>
  );
};

export default Achievements;
