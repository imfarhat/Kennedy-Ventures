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
  return (
    <Card className="max-w-[350px] w-full h-full group relative overflow-hidden hover:-translate-y-3 transition ease-in">
      <CardHeader className="flex flex-row items-center justify-start gap-2 group-hover:bg-secondary/5 transition ease-in">
        <Image
          src={`${data.imagePath}`}
          height={80}
          width={80}
          className="max-h-20 h-full object-cover"
          alt={data.title}
        />
        <div>
          <CardTitle className="text-secondary">{data.title}</CardTitle>
          <CardDescription>{data.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-4 border-t bg-secondary/5 group-hover:bg-inherit transition ease-in h-full">
        {data.content}
      </CardContent>
      <CardFooter className="absolute bottom-0 right-0">
        <Quote className="text-muted-foreground/25 size-8" />
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
