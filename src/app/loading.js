import Image from "next/image";
import Logo from "@/assets/kennedy ventures Logo circle.png";

const Loading = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="flex items-center justify-center flex-col animate-pulse">
        <Image
          src={Logo}
          height={150}
          width={150}
          priority
          className="size-36"
        />
        <div className="text-secondary mt-2 flex flex-col items-center justify-center">
          <span className="font-extrabold uppercase">Kennedy</span>

          <p className="uppercase text-sm -mt-1.5 w-full text-justify pb-2 tracking-widest font-medium">
            Ventures
          </p>
        </div>
      </section>
    </main>
  );
};
export default Loading;
