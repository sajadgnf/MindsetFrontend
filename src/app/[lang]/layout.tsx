import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DictionaryProvider } from "@/lib/dictionary-context";

import { setLang } from "@/lib/i18n";
import { getDictionary } from "@/src/dictionaries";
import type { langTypes } from "@/src/types/common";

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

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: langTypes = rawLang === "fa" ? "fa" : "fa";
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
  params: Promise<{ lang: string }>;
}>) {
  const rawLang = (await params).lang;
  const lang: langTypes = rawLang === "fa" ? "fa" : "fa";
  setLang(lang);
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang} dir={lang === "fa" ? "rtl" : "ltr"} className="dark">
      <DictionaryProvider dictionary={dictionary}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col`}>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </body>
      </DictionaryProvider>
    </html>
  );
}
