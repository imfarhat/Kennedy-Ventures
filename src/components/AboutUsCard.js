import Image from "next/image";

const AboutUsCard = ({ data }) => {
  return (
    <>
      <aside className="flex flex-col items-center justify-center group">
        <Image
          src={`${data.imagePath}`}
          height={208}
          width={208}
          priority
          className="size-52 bg-primary rounded-tr-[6.5rem] rounded-bl-[6.5rem] group-hover:rounded-tr-none group-hover:rounded-tl-[6.5rem] group-hover:rounded-bl-none group-hover:rounded-br-[6.5rem] transition-all ease-in aspect-square"
          alt="Scott Kennedy"
        />
        <span className="border-b-4 border-double border-secondary w-1/2 mt-4 md:mt-6"></span>
        <h3 className="mt-2 text-xl font-semibold text-center">{data.name}</h3>
        <p className="mt-4 text-muted-foreground text-justify text-sm md:text-base">
          {data.about}
        </p>
      </aside>
    </>
  );
};
export default AboutUsCard;
