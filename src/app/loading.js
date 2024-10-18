import Image from "next/image";
import Logo from "@/assets/circular-logo.png";
import LogoGif from "@/assets/logo.gif";
const Loading = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="flex items-center justify-center flex-col animate-pulse">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src={LogoGif}
            height={146.25}
            width={260}
            priority
            alt="Kennedy Ventures Logo"
            className="bg-primary"
            unoptimized={true}
          />
          <p className="text-muted-foreground">Loading. Please wait...</p>
        </div>
        {/* <Image
          src={Logo}
          height={150}
          width={150}
          priority
          alt="Kennedy Ventures Logo"
          className="size-36"
        />
        <div className="text-secondary mt-2 flex flex-col items-center justify-center">
          <span className="font-extrabold uppercase">Kennedy</span>

          <p className="uppercase text-sm -mt-1.5 w-full text-justify pb-2 tracking-widest font-medium">
            Ventures
          </p>
        </div> */}
      </section>
    </main>
  );
};
export default Loading;
