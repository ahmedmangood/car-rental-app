import Image from "next/image";

const SearchSection = () => (
  <section className="w-full rounded-3xl bg-blue py-16 px-16 mt-8 mb-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 ">
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Image
        src="/vectorbg.png"
        alt="Overlay graphic"
        fill
        className="object-cover opacity-30 select-none"
        priority
      />
    </div>
    <div className="flex-1 z-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
        Enjoy every mile with
        <br />
        adorable companionship.
      </h2>
      <p className="text-white/80 text-sm md:text-base mb-8 max-w-lg">
        Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
        bibendum ullamcorper in. Diam tincidunt tincidunt erat
      </p>
      <form className="flex gap-2 max-w-md">
        <input
          type="text"
          placeholder="City"
          className="flex-1 rounded-lg px-4 py-3 text-base bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow"
        />
        <button
          type="submit"
          className="bg-yellow text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow/90 transition"
        >
          Search
        </button>
      </form>
    </div>
    <div className="flex-1 flex items-center justify-center z-10">
      <Image
        src="/opacityCar.svg"
        alt="Car Illustration"
        width={300}
        height={120}
        className="object-contain opacity-60"
        priority
      />
    </div>
  </section>
);

export default SearchSection;
