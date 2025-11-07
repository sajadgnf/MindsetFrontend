import Image from "next/image";

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: { name: string; avatar: string; description: string; role: string };
}) => {
  return (
    <div
      key={testimonial.name}
      className="group  space-y-6 overflow-hidden rounded-lg border border-white/10 bg-[#161b22] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:scale-[1.02] hover:border-white/20 hover:shadow-lg"
    >
      <div className="flex items-center gap-4">
        <Image
          width={12}
          height={12}
          alt={testimonial.name}
          src={testimonial.avatar}
          className="h-12 w-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-lg leading-relaxed text-muted-foreground">{testimonial.description}</p>
    </div>
  );
};

export default TestimonialCard;
