'use client';

import Loading from '@/components/Loading/Loading';
import { axiosServers } from '@/servers/Servers';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ErrorServer } from '@/components/Error/ErrorServer';
import { IRegionalAchievements } from '@/types/RegionalAchievements';

const Achievements = () => {
  const [data, setData] = useState<IRegionalAchievements[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setEror] = useState(false);
  const [maxPage, setMaxPage] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    setLoading(true);
    const fun = async (step: number) => {
      setLoading(true);
      try {
        const resp = await axiosServers.GetRegionalAchievements(step);
        data.length ? setData(prev => [...prev, ...resp.achivments]) : setData(resp.achivments);
        setMaxPage(resp.meta.total);
      } catch (e) {
        setEror(true);
      } finally {
        setLoading(false);
      }
    };
    fun(step);
  }, [step]);

  const nextStep = () => {
    if (step !== maxPage) {
      setStep(prev => (prev += 1));
    }
  };

  return (
    <section className="bg-[#090912] rounded-2xl mt-5 py-7 px-8">
      {error ? (
        <ErrorServer />
      ) : (
        <div className="flex flex-col">
          <h2 className=" text-[45px] text-[#dddbdb] cursor-pointer uppercase font-mediun mb-4">
            Достижения регионов
          </h2>
          <div className="flex justify-center">
            <span className=" mb-7 bg-[#7f7f909e] w-[92%] h-[1px]"></span>
          </div>
          <ul className="flex justify-center gap-8 flex-wrap ">
            {data.map(el => (
              <li
                key={el.id}
                style={{
                  backgroundImage: `url('${el.main_image}')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
                className=" w-[350px] rounded-2xl relative cursor-pointer h-[320px]">
                <span className="py-10 px-6  absolute right-0 left-0 bottom-0 top-0 bg-[#11111169] rounded-2xl hover:bg-[#cac9c931] transition duration-100">
                  <h3 className=" text-white text-[28px] text-inherit font-semibold">{el.title}</h3>
                  <p className=" w-[280px] text-white font-medium text-[17px] mt-3 z-10 relative">
                    {el.subtitle}
                  </p>
                </span>
              </li>
            ))}
            {loading && <Loading />}
          </ul>
          <div className="flex justify-center pt-5">
            {!loading && (
              <button
                className=" bg-[#745588] hover:bg-[#b98dd6] transition duration-150 rounded-2xl w-96 px-3 py-3"
                onClick={nextStep}>
                Показать еще
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
