import { MapPin, Car, Wallet } from "lucide-react";

const features = [
  {
    icon: <MapPin size={40} className="mx-auto mb-4" />,
    title: "Availability",
    desc: "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis",
  },
  {
    icon: <Car size={40} className="mx-auto mb-4" />,
    title: "Comfort",
    desc: "Gravida auctor fermentum morbi vulputate ac egestas orci etium convallis",
  },
  {
    icon: <Wallet size={40} className="mx-auto mb-4" />,
    title: "Savings",
    desc: "Pretium convallis id diam sed commodo vestibulum lobortis volutpat",
  },
];

const FeaturesSection = () => (
  <section className="w-full py-12 bg-white">
    <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">
      {features.map((feature) => (
        <div key={feature.title} className="flex-1 text-center">
          {feature.icon}
          <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
          <p className="text-sm text-black/80 leading-relaxed">
            {feature.desc}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
