"use client";

import { Card, CardContent } from "@/components/ui/card";
import TestimonialCard from "./card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useDictionary } from "@/lib/dictionary-context";

const testimonials = [
  {
    description:
      "Mindset helped us ship complex features twice as fast without sacrificing quality. Our engineers finally feel aligned with the product vision.",
    name: "Sara Ahmadi",
    role: "VP Engineering",
    avatar: "/landing/article-cover.webp",
  },
  {
    description:
      "The clarity we get from Mindset's playbooks has been transformative. Our roadmap meetings went from stressful to strategic.",
    name: "Daniel Rahimi",
    role: "Head of Product",
    avatar: "/landing/article-cover.webp",
  },
  {
    description:
      "Our fefefe aboration improved overnight. Mindset keeps everyone focused on outcomes and makes retros a breeze.",
    name: "ewef Kiani",
    role: "Product bedrged",
    avatar: "/landing/article-cover.webp",
  },
  {
    description:
      "Mindset helpegrewfgre twice as fast without sacrificing quality. Our engineers finally feel aligned with the product vision.",
    name: "Sara Agredi",
    role: "VP Enggerwrgeering",
    avatar: "/landing/article-cover.webp",
  },
  {
    description:
      "Thgrearity we get from Mindset's playbooks has been transformative. Our roadmap meetings went from stressful to strategic.",
    name: "Dgreel Rahimi",
    role: "Heagerf Product",
    avatar: "/landing/article-cover.webp",
  },
  {
    description: "Our tegerni",
    name: "Dgreel Rahimi",
    role: "Prodger Design Lead",
    avatar: "/landing/article-cover.webp",
  },
];

const Testimonials = () => {
  const dict = useDictionary();

  return (
    <section className=" container mx-auto max-w-7xl py-20">
      <h2 className="text-[2.5rem] font-bold text-center mb-14">{dict.testimonials_heading}</h2>

      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full container max-w-[95%] mx-auto xl:max-w-none"
        dir="ltr"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-start-7! sm:-start-10!" />
        <CarouselNext className="-end-7! sm:-end-10!" />
      </Carousel>
    </section>
  );
};

export default Testimonials;
