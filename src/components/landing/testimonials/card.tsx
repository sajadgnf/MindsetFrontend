import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: { name: string; avatar: string; description: string; role: string };
}) => {
  return (
    <Card
      key={testimonial.name}
      className="group overflow-hidden rounded-lg border border-white/10 bg-[#161b22] p-0 backdrop-blur-sm h-64"
    >
      <CardHeader className="flex flex-row items-center gap-4 px-6 pt-6">
        <Image
          width={12}
          height={12}
          alt={testimonial.name}
          src={testimonial.avatar}
          className="h-12 w-12 rounded-full"
        />
        <div>
          <CardTitle className="text-white">{testimonial.name}</CardTitle>
          <CardDescription>{testimonial.role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6 overflow-y-auto h-full">
        <p className="text-lg leading-relaxed text-muted-foreground">{testimonial.description}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
