import Image from "next/image";
import Logo from "@/assets/kennedy ventures Logo circle.png";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="bg-primary text-secondary z-40 flex items-center justify-center">
      <nav className="container w-full flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center flex-col">
          <Image
            src={Logo}
            height={100}
            width={100}
            priority
            className="size-24"
          />
          <div className="-mt-6">
            <span className="font-extrabold uppercase text-sm">Kennedy</span>
            <br />
            <p className="uppercase text-xs -mt-1.5 w-full text-justify pb-2 tracking-widest font-medium">
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
