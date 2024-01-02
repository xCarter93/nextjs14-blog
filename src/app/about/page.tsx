import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex gap-24">
      <div className="flex flex-1 flex-col gap-10">
        <h2 className="text-xl font-bold text-indigo-500">About Agency</h2>
        <h1 className="text-5xl font-bold leading-normal text-white">
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          reprehenderit illum esse debitis eos, nostrum magni cupiditate optio
          eveniet, error nobis minus quaerat aliquid sint officia doloribus sunt
          voluptate ipsa?
        </p>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-indigo-500">10 K+</h1>
            <p className="text-white">Years of experience</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-indigo-500">234 K+</h1>
            <p className="text-white">People reached</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-indigo-500">5 K+</h1>
            <p className="text-white">Services and plugins</p>
          </div>
        </div>
      </div>
      <div className="relative hidden flex-1 object-contain md:block">
        <Image src="/about.png" alt="about image" height={500} width={500} />
      </div>
    </div>
  );
}
