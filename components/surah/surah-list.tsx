import { Surah } from "@/types/surah";
import { SurahCard } from "./surah-card";

interface SurahListProps {
  surahs: Surah[];
}

export function SurahList({ surahs }: SurahListProps) {
  if (!surahs || surahs.length === 0) {
    return (
      <div className="flex justify-center items-center py-20 text-muted-foreground">
        No surahs found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {surahs.map((surah) => (
        <SurahCard key={surah.id} surah={surah} />
      ))}
    </div>
  );
}
