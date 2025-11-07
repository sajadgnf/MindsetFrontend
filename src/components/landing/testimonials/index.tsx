import TestimonialCard from "./card";

import { getLang } from "@/src/lib/i18n";
import { getDictionary } from "@/src/dictionaries";

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
      "Our team collaboration improved overnight. Mindset keeps everyone focused on outcomes and makes retros a breeze.",
    name: "Mahsa Kiani",
    role: "Product Design Lead",
    avatar: "/landing/article-cover.webp",
  },
];

const Testimonials = async () => {
  const dict = await getDictionary(getLang());

  return (
    <section className=" border-b border-border py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-[2.5rem] font-bold text-center mb-14">{dict.testimonials_heading}</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
