'use client';
import { ErrorServer } from '@/components/Error/ErrorServer';
import Loading from '@/components/Loading/Loading';
import { axiosServers } from '@/servers/Servers';
import { Ilongreads, Ilongred } from '@/types/longreads';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const page = () => {
  const [data, setData] = useState<Ilongred[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setEror] = useState(false);

  useEffect(() => {
    
    const fun = async () => {
      try {
        const result = await axiosServers.GetLongreads();
        setData(result);
      } catch {
        setEror(true);
      } finally {
        setLoading(false);
      }
    }
    fun()
  }, []);
  return (
    <div className="mt-7 flex flex-col">
      <h2 className=' text-[40px] font-semibold'>Сферы лидерства</h2>
      <span className="bg-[#ffffff5f] w-full h-[2px]"></span>
      <ul className="flex flex-wrap mt-4 gap-5 justify-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorServer />
        ) : (
          data.map(e => (
            <Link key={e.id} href="">
              <li className=" bg-[#ffffff64] hover:bg-[#ba93c867] transition duration-150 text-white w-[740px] flex gap-8 rounded-[22px] p-3 h-[220px]">
                <Image
                  alt="sa"
                  priority
                  width={350}
                  className="rounded-[22px]"
                  src={e.image}
                  height={200}
                />
                <div className="flex py-8 flex-col">
                  <h2 className=" text-3xl ">{e.title}</h2>
                  <p className=" font-medium mt-2">{e.subtitle}</p>
                </div>
              </li>
            </Link>
          ))
        )}
      </ul>
    </div>
  );
};

export default page;
