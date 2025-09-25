import BattleTestText from "public/svg/BattleTestText";

const features = [
  {
    title: "Deploy. Scale. Done.",
    desc: "Our agents deploy and scale your stack",
  },
  {
    title: "Built-In Security. End-to-End.",
    desc: "Every workload is isolated, encrypted, and protected.",
  },
  {
    title: "Prod-Ready from Day One",
    desc: "Infra you can trust. Pipelines you don’t babysit.",
  },
];

export default function BattleTest() {
  return (
    <section className="relative  w-full flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#0a0f1a] to-black text-white  ">
      <div className="relative w-full z-10 flex flex-col justify-center items-center  ">
        <h1 className="text-4xl  sm:text-5xl md:text-6xl font-bold text-white leading-tight md:max-w-[60%] text-center justify-center ">
          <span className="bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF] bg-clip-text text-transparent">
            Battle-tested{" "}
          </span>
          AI with Enterprise level rigor
        </h1>
      </div>

      <div className="mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col gap-2 items-center text-center">
            <div className="p-1.5 border-white/40 border-[1px] rounded-[6px]">
              <BattleTestText />
            </div>
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-gray-400 text-sm  ">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
