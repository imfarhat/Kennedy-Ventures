import Image from "next/image";
import Logo from "@/assets/kennedy ventures Logo circle.png";

const Loading = () => {
  return (
    <section className="flex items-center justify-center flex-col animate-pulse">
      <Image src={Logo} height={100} width={100} className="size-24" />
      <div className="text-secondary mt-2 flex flex-col items-center justify-center">
        <span className="font-extrabold uppercase text-sm">Kennedy</span>

        <p className="uppercase text-xs -mt-1.5 w-full text-justify pb-2 tracking-widest font-medium">
          Ventures
        </p>
      </div>
    </section>
  );
};
export default Loading;
