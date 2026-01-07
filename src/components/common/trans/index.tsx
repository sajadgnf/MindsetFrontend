import { useDictionary } from "@/lib/dictionary-context";
import type { Dictionary } from "@/src/types/common";

export default function Trans({ children }: { children: keyof Dictionary | React.ReactNode }) {
  const dict = useDictionary();
  const key = typeof children === "string" ? (children as keyof Dictionary) : String(children) as keyof Dictionary;
  return <>{dict[key]}</>;
}
