export const LeadershipSphere = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/MAX_2889.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="rel rounded-[23px] relative mt-8 h-[500px] w-full">
      <span className="text-[#ffffff] h-full gap-6 px-14 justify-center flex flex-col items-start absolute right-0 top-0 left-0 bottom-0 bg-[#21202069]">
        <h2 className=" text-[50px] font-semibold">Сферы лидерства </h2>
        <button className="bg-[#ffffff] hover:bg-[#eeececcf] transition duration-100 text-black font-semibold px-10 py-3 rounded-xl">
          Читать
        </button>
      </span>
    </div>
  );
};
