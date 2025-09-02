import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-blue rounded-3xl p-6 md:p-12 mb-10 overflow-hidden h-[600px]">
      {/* Overlay SVG group */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/heroGroup.svg"
          alt="Overlay graphic"
          fill
          className="object-cover opacity-40 select-none"
          priority
        />
      </div>
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Background images */}
        <Image
          src="/heroCar.png"
          alt="Car background"
          width={1000}
          height={1000}
          className="select-none absolute left-[34%] top-[20%] w-[600px]"
        />
      </div>
      {/* Left: Text & Button */}
      <div className="flex-1 text-white max-w-lg z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          Experience the road
          <br />
          like never before
        </h1>
        <p className="mb-6 text-white/80 text-base md:text-lg">
          Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
          tristique et gravida. Quis nunc interdum gravida ullamcorper
        </p>
        <button className="bg-yellow text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow/90 transition">
          View all cars
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
