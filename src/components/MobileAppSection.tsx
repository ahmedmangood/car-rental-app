import Image from "next/image";

const MobileAppSection = () => (
  <section className="w-full py-16 flex flex-col md:flex-row items-center justify-center gap-40">
    <div className="max-w-lg">
      <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
        Download
        <br />
        mobile app
      </h2>
      <p className="text-black/70 mb-6 text-base md:text-lg">
        Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
        turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet
        cras hendrerit enim condimentum. Condimentum interdum risus bibendum
        urna
      </p>
      <div className="flex gap-4">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image src="/appStore.svg" alt="App Store" width={140} height={40} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image
            src="/playStore.svg"
            alt="Google Play"
            width={140}
            height={40}
          />
        </a>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <Image
        src="/phoneFrame.svg"
        alt="Phone Frame"
        width={400}
        height={520}
        priority
      />
    </div>
  </section>
);

export default MobileAppSection;
