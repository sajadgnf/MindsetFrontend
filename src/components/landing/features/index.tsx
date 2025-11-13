import { Atom, BookOpen, GitMerge } from "lucide-react";

import FeatureCard from "./card";

import { getLang } from "@/lib/i18n";
import { getDictionary } from "@/src/dictionaries";

import { ARTICLES, COURSES, READING_COURSES } from "@/src/constants/paths";

export default async function Features() {
  const lang = getLang();
  const dict = await getDictionary(lang);

  const features = [
    {
      Icon: GitMerge,
      title: dict.courses_and_workshops,
      description: dict.courses_and_workshops_description,
      image: "/landing/courses-cover.webp",
      iconColor: "text-purple-400",
      href: COURSES,
    },
    {
      Icon: BookOpen,
      title: dict.reading_courses,
      description: dict.reading_courses_description,
      image: "/landing/reading-courses-cover.webp",
      iconColor: "text-blue-400",
      href: READING_COURSES,
    },
    {
      Icon: Atom,
      title: dict.articles,
      description: dict.articles_description,
      image: "/landing/article-cover.webp",
      iconColor: "text-green-400",
      href: ARTICLES,
    },
  ];

  return (
    <section className="border-b border-border py-20">
      <div className="container mx-auto  max-w-6xl space-y-20">
        {features.map((feature, index) => (
          <FeatureCard {...feature} index={index} key={index} />
        ))}
      </div>
    </section>
  );
}
