import TelegramCta from "@/components/common/telegramCta";
import Testimonials from "@/components/landing/testimonials";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getDictionary } from "@/src/dictionaries";
import { langTypes } from "@/src/types/common";
import Image from "next/image";

const MentorshipPage = async ({ params }: { params: Promise<{ lang: langTypes }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header Section */}

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-4">{dict.dedicated_mentoring_course}</h1>
            <p className="text-xl text-muted-foreground">{dict.mentor_name}</p>
          </div>
          <p className="text-base whitespace-pre-line leading-loose">{dict.dedicated_mentoring_course_description_1}</p>
          <p className="text-base whitespace-pre-line leading-loose">{dict.dedicated_mentoring_course_description_2}</p>
        </div>
        <Image
          src="/mentorship/mentorship-cover.webp"
          alt="Mentorship Image"
          width={300}
          height={300}
          className="rounded-full aspect-2/3 object-cover"
        />
      </div>

      {/* Registration Process Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{dict.registration_process_title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-base leading-loose">{dict.registration_process_description}</p>
          <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground">
            <li>{dict.registration_requirement_1}</li>
            <li>{dict.registration_requirement_2}</li>
            <li>{dict.registration_requirement_3}</li>
          </ul>
          <TelegramCta>{dict.registration_process_note}</TelegramCta>
          <p className="text-base leading-loose text-muted-foreground">{dict.registration_process_followup}</p>
        </CardContent>
      </Card>

      {/* Course Structure Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{dict.mentorship_structure_title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-base leading-loose">{dict.mentorship_structure_description}</p>
          <ul className="list-disc list-inside space-y-3 text-base text-muted-foreground pb-4">
            <li>
              <strong className="text-foreground">{dict.mentorship_structure_item_1}</strong>
            </li>
            <li>
              <strong className="text-foreground">{dict.mentorship_structure_item_2}</strong>
            </li>
            <li>
              <strong className="text-foreground">{dict.mentorship_structure_item_3}</strong>
            </li>
            <li>
              <strong className="text-foreground">{dict.mentorship_structure_item_4}</strong>
            </li>
            <li>
              <strong className="text-foreground">{dict.mentorship_structure_item_5}</strong>
            </li>
          </ul>
          <TelegramCta>{dict.mentorship_structure_cta}</TelegramCta>
        </CardContent>
      </Card>

      <Testimonials />
    </main>
  );
};

export default MentorshipPage;
