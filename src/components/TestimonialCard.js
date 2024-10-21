import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Quote } from "lucide-react";

const TestimonialCard = ({ data }) => {
  const { title, imagePath, description, content } = data;
  return (
    <Card className="max-w-[350px] w-full h-full group relative overflow-hidden hover:-translate-y-3 transition ease-in select-none">
      <CardHeader className="p-4 flex flex-row items-center justify-start gap-2 bg-secondary/5 group-hover:bg-inherit transition ease-in">
        <Image
          src={`${imagePath}`}
          height={64}
          width={64}
          className="mix-blend-multiply object-contain max-h-16 aspect-square h-full rounded-md"
          alt={title}
        />

        <div>
          <CardTitle className="text-secondary text-lg md:text-xl">
            {title}
          </CardTitle>
          <CardDescription className="-mt-1 truncate">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-4 border-t group-hover:bg-secondary/5 transition ease-in h-full text-sm md:text-base text-muted-foreground group-hover:text-muted">
        {content}
      </CardContent>
      <CardFooter className="p-0 m-0">
        <Quote className="absolute bottom-1 right-1 text-muted-foreground/25 size-8" />
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
