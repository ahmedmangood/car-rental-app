import Image from "next/image";

const steps = [
  {
    title: "Erat at semper",
    desc: "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum...",
  },
  {
    title: "Urna nec vivamus risus duis arcu",
    desc: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
  },
  {
    title: "Lobortis euismod imperdiet tempus",
    desc: "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi",
  },
  {
    title: "Cras nulla aliquet nam eleifend amet et",
    desc: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero",
  },
];

const StepsSection = () => (
  <section className="w-full py-12 bg-white flex flex-col md:flex-row items-center justify-between gap-8">
    <div className="flex-1 flex items-center justify-center">
      <Image
        src="/cars/carTest.avif"
        alt="Car illustration"
        width={340}
        height={180}
        className="object-contain "
        priority
      />
    </div>
    <div className="flex-1 max-w-xl mx-auto">
      {steps.map((step, i) => (
        <div key={i} className="flex items-start gap-4 mb-8">
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-base p-2.5">
            {i + 1}
          </div>
          <div>
            <div className="font-semibold text-black mb-1 text-base md:text-lg">
              {step.title}
            </div>
            <div className="text-sm text-black/70 leading-relaxed">
              {step.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default StepsSection;
