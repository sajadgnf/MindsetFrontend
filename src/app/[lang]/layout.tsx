import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navigation from "@/components/landing/navigation";

import { setLang } from "@/lib/i18n";
import { getDictionary } from "@/src/dictionaries";

export async function generateStaticParams() {
  return [{ lang: "fa" }];
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: langTypes }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.app_title,
    description: dict.metadata_description,
    metadataBase: new URL("https://azibom.com"),
    openGraph: {
      title: dict.app_title,
      description: dict.metadata_description,
      url: "https://azibom.com",
      siteName: "Next.js",
      images: [
        {
          url: "/openGraph.jpg",
          width: 800,
          height: 600,
        },
        {
          url: "/openGraph.jpg",
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
      locale: lang === "fa" ? "fa_IR" : "en_US",
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: langTypes }>;
}>) {
  const lang = (await params).lang;
  setLang(lang);
  return (
    <html lang={lang} className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
