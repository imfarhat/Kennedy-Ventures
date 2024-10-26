import Image from "next/image";
import Link from "next/link";
import LogoGif from "@/assets/logo.gif";
// import Scrollprogress from "@/components/Scrollprogress";

const Nav = () => {
  return (
    <>
      <header className="bg-primary text-secondary z-40 flex flex-col items-center justify-center sticky top-0 shadow-md">
        <nav className="container pr-4 pl-0.5 w-full flex items-center justify-between">
          <Link href="/" className="max-h-20 overflow-hidden" prefetch={true}>
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
            <Link href="/" prefetch={true}>
              Home
            </Link>
            <Link href="/#portfolio" prefetch={true}>
              Portfolio
            </Link>
          </div>
        </nav>
        {/* <Scrollprogress /> */}
      </header>
    </>
  );
};
export default Nav;
