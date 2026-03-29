import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] bg-neutral-50 flex justify-center items-start pt-0 overflow-hidden">
      <div className="relative w-[80%] h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-b-[40px] overflow-hidden group">
        <Image
          className="object-cover transition-transform duration-1000 ease-in-out brightness-[0.85] group-hover:brightness-75 group-hover:scale-105"
          alt="Learn Platform Background"
          fill
          src="https://i.pinimg.com/1200x/86/de/25/86de25bf5b2b497bb8be816e43e60bc0.jpg"
          unoptimized
        />

        <div className="absolute inset-0 bg-black/40 z-10 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-700 h-full" />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 md:p-12 h-full max-h-[80vh]">
          <h1 className="text-white text-6xl md:text-8xl font-black tracking-tighter text-center drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] leading-none mb-8">
            Learn Platform
          </h1>

          <div className="max-w-3xl flex flex-col items-center">
            <p className="text-white text-2xl md:text-3xl font-bold text-center leading-tight drop-shadow-md mb-5">
              Unlock your potential. <br className="hidden md:block" />
              Success through consistency and smart methodology.
            </p>

            <div className="h-[2.5px] w-28 bg-blue-500 my-2 rounded-full shadow-[0_4px_10px_rgba(37,99,235,0.6)]" />

            <p className="text-blue-100/90 text-lg md:text-xl font-medium text-center italic tracking-wide mt-3 drop-shadow-sm">
              Focus on the result, expand your world, and connect with leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
