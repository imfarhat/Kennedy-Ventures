import Image from "next/image";
import Link from "next/link";
import LogoGif from "@/assets/logo.gif";

const Nav = () => {
  return (
    <header className="bg-primary text-secondary z-40 flex items-center justify-center sticky top-0 shadow-md">
      <nav className="container pr-4 pl-0.5 w-full flex items-center justify-between">
        <Link href="/" prefetch={true} className="max-h-20">
          <Image
            src={LogoGif}
            height={146.25}
            width={260}
            priority
            className="-mx-6 -my-6 object-cover"
            alt="Kennedy Ventures Logo"
            unoptimized={true}
          />
        </Link>
        <div className="py-4 md:py-6 flex items-center justify-center gap-4 font-bold">
          <Link href="/">Home</Link>
          <Link href="/#portfolio">Portfolio</Link>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
