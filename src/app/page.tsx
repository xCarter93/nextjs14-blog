import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col-reverse gap-24 md:flex-row">
      <div className="flex flex-1 flex-col items-center gap-14 text-center md:items-start md:text-left">
        <h1 className="text-7xl font-extrabold text-white">
          Creative Thoughts Agency.
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          doloremque voluptatibus fuga exercitationem excepturi, tenetur,
          doloribus dolore, eos voluptas minima nihil adipisci ducimus molestiae
          sed a aliquid saepe facilis asperiores.
        </p>
        <div className="flex gap-7">
          <button className="btn btn-primary">Learn More</button>
          <button className="btn btn-neutral">Contact</button>
        </div>
        <div>
          <Image
            src="/brands.png"
            alt="brand images"
            width={500}
            height={100}
            className="grayscale"
          />
        </div>
      </div>
      <div className="relative flex-1">
        <Image src="/hero.gif" alt="hero gif" width={1000} height={1000} />
      </div>
    </div>
  );
}
