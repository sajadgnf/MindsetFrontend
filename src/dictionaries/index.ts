import "server-only";
import type { langTypes, Dictionary } from "@/src/types/common";

const dictionaries: Record<langTypes, () => Promise<Dictionary>> = {
  fa: () => import("./fa.json").then((module) => module.default),
};

export const getDictionary = async (locale: langTypes): Promise<Dictionary> => {
  const dictionaryLoader = dictionaries[locale];
  if (!dictionaryLoader) {
    console.log(`Dictionary for locale "${locale}" not found`);
  }
  return dictionaryLoader();
};
