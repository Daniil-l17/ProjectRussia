'use client';
import { ErrorServer } from '@/components/Error/ErrorServer';
import Loading from '@/components/Loading/Loading';
import { axiosServers } from '@/servers/Servers';
import { IDetailAchiments } from '@/types/DetailAchiments';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useLayoutEffect, useState } from 'react';

export const page = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<null | IDetailAchiments>(null);
  const [loading, setLoading] = useState(true);
  const [error, setEror] = useState(false);
  const [active, setActive] = useState(0);
  const images = data?.images?.[active].image;
  useLayoutEffect(() => {
    const fun = async () => {
      try {
        const result = await axiosServers.GetDetailAchievements(+params.id);
        setData(result);
      } catch {
        setEror(true);
      } finally {
        setLoading(false);
      }
    };
    fun();
  }, []);

  const next = () => setActive(index => (data?.images.length! - 1 === index ? 0 : index + 1));
  const prev = () => setActive(index => (index === 0 ? data?.images.length! - 1 : index - 1));



  
  return (
    <section className="flex flex-col">
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorServer />
      ) : (
        <>
          {' '}
          <h2 className=" text-4xl my-5">{data?.title}</h2>
          <p className=" mb-4 text-xl font-medium">{data?.subtitle}</p>
          <div className="flex justify-center">
            <span className="bg-[#eeeeef2f] w-[96%] h-[2px]"></span>
          </div>
          <div className="flex gap-3 py-5 justify-between">
            <div className=" bg-[#ffffffe5] group/item relative rounded-2xl p-2 w-[600px]">
              <Image
                className=" h-[380px] transition duration-150 rounded-2xl"
                alt={data?.images[active].id!}
                width={600}
                priority
                height={300}
                src={data?.images[active].image!}
              />
              <div className="invisible transition flex gap-3  duration-150 right-14 bottom-14 absolute group-hover/item:visible">
                <button onClick={prev} className='  px-3 py-3 text-black  bg-[#e9e9e9c6] rounded-[19px]'>
                  <ArrowLeft className=' text-[black]' />
                </button>
                <button onClick={next} className=' px-3 py-3 text-black bg-[#e9e9e9c6] rounded-[19px]'>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default page;
