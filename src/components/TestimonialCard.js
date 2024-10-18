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
    <Card className="max-w-[350px] w-full h-full rounded-none relative">
      <CardHeader className="flex flex-row items-center justify-start gap-2">
        <Image
          src={`/testimonials/${data.imageFileName}`}
          height={80}
          width={80}
          className="max-h-20 h-full object-cover"
          alt={data.title}
        />
        <div>
          <CardTitle>{data.title}</CardTitle>
          <CardDescription>{data.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>{data.content}</CardContent>
      <CardFooter className="absolute bottom-0 right-0">
        <Quote className="text-muted-foreground/25 size-8" />
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
