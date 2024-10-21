import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesCard = ({ data }) => {
  return (
    <>
      <Card className="max-w-[360px] w-full h-full text-secondary overflow-hidden hover:border-primary group hover:-translate-y-3 transition ease-in">
        <CardHeader className="flex flex-row items-center justify-start gap-2 group-hover:bg-inherit bg-secondary/5 backdrop-blur-sm transition ease-in">
          <Image
            src={`${data.imagePath}`}
            height={48}
            width={48}
            priority
            className="size-12 bg-primary p-2 rounded-full aspect-square text-secondary"
            alt={data.title}
          />

          <CardTitle className="text-[1.45rem]">{data.title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-4 border-t group-hover:bg-secondary/5 transition ease-in h-full">
          {data.description}
        </CardContent>
      </Card>
    </>
  );
};
export default ServicesCard;
