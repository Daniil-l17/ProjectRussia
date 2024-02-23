import Image from "next/image"


export const VdnxPosterHome = () => {
  return (
    <a target="_blank" href="https://russia.ru/">
          <div className=" mt-10 relative rounded-[23px]">
      <Image className=" w-full rounded-[23px]" src={'./rsvs.svg'} priority alt="vdnx" width={600} height={600} />
      <button className=" w-[160px] right-0 hover:bg-[#dbdada8b] left-8 bottom-8 bg-[#f3f3f3] rounded-2xl px-9 py-3 text-[#000] font-semibold absolute">подробнее</button>
    </div>
    </a>
  )
}
