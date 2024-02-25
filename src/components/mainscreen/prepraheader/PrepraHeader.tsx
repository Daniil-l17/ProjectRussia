import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const PrepraHeader = () => {
  const router = useRouter()
  return (
    <section className='bg-[#1b1e36] relative h-[600px] flex py-5 px-5 z-10 mt-8 rounded-[20px]'>
      <div className=' py-20 px-8'>
      <Image alt='d' priority width={430} height={200} src={'/logo.svg'} />
      <h3 className=' mt-10 font-semibold w-[300px] text-xl'>Для тех, кто любит Россию и интересуется ее современной историей.</h3>
      <button onClick={() => router.replace('/achievements')}  className=' bg-[#e33e3eab] mt-20 font-medium text-lg px-[70px] py-5 rounded-2xl'>Достижения современной России</button>
      </div>
      <div style={{
                  backgroundImage: `url('/banner.png')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }} className=' w-[900px] right-40 -z-10 absolute h-[600px]'>
      </div>
    </section>
  )
}

export default PrepraHeader