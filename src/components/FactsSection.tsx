import Image from "next/image";
import { Car, User, Wallet, Route } from "lucide-react";

const stats = [
  {
    icon: <Car size={28} className="text-white" />,
    value: "540+",
    label: "Cars",
  },
  {
    icon: <User size={28} className="text-white" />,
    value: "20k+",
    label: "Customers",
  },
  {
    icon: <Wallet size={28} className="text-white" />,
    value: "25+",
    label: "Years",
  },
  {
    icon: <Route size={28} className="text-white" />,
    value: "20m+",
    label: "Miles",
  },
];

const FactsSection = () => (
  <section className="w-full rounded-3xl bg-blue py-12 px-4 mt-12 mb-8 relative overflow-hidden">
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Image
        src="/heroGroup.svg"
        alt="Overlay graphic"
        fill
        className="object-cover opacity-30 select-none"
        priority
      />
      <Image
        src="/heroCar.png"
        alt="Car background"
        width={1000}
        height={300}
        className="select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] opacity-30"
      />
    </div>
    <div className="relative z-10 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 text-center">
        Facts In Numbers
      </h2>
      <p className="text-white/80 text-sm md:text-base mb-8 text-center max-w-2xl">
        Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
        bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
        fermentum
      </p>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-center w-full max-w-4xl">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white rounded-xl shadow px-8 py-6 min-w-[160px]"
          >
            <div className="bg-yellow rounded-lg p-3 mb-3 flex items-center justify-center">
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-black mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-black/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FactsSection;
