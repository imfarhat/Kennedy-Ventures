import Image from "next/image";
import Logo from "@/assets/circular-logo.png";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="bg-primary text-secondary z-40 flex items-center justify-center">
      <nav className="container pr-4 pl-2 w-full flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center flex-col">
          <Image
            src={Logo}
            height={100}
            width={100}
            priority
            className="size-20 md:size-24"
          />
          <div className="-mt-6">
            <span className="font-extrabold uppercase text-xs">Kennedy</span>
            <br />
            <p className="uppercase text-[0.575rem] -mt-1.5 w-full text-justify pb-2 tracking-widest font-medium">
              Ventures
            </p>
          </div>
        </Link>
        <div className="flex items-center justify-center gap-4 font-bold">
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
