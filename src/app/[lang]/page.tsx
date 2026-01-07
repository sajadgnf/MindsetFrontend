import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import Testimonials from "@/components/landing/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen overflow-hidden">
      <Hero />
      <div className="relative">
        <div className="absolute inset-0 z-0 h-full w-full top-0 bottom-0 left-0 right-0">
          <Image
            fill
            src="/landing/background.webp"
            alt="Mathematical formulas background"
            className="object-cover opacity-[0.08] grayscale blur-sm brightness-50"
          />
        </div>
        <Features />
        <Testimonials />
      </div>
    </main>
  );
}
