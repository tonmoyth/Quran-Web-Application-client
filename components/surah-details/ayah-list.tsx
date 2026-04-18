import { Ayah } from "@/types/surah";
import { AyahCard } from "./ayah-card";

interface AyahListProps {
  ayahs: Ayah[];
  searchQuery?: string;
}

export function AyahList({ ayahs, searchQuery }: AyahListProps) {
  if (!ayahs || ayahs.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-muted-foreground italic">No ayahs found for your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto w-full pb-12">
      {ayahs.map((ayah) => (
        <AyahCard key={ayah.number} ayah={ayah} searchQuery={searchQuery} />
      ))}
    </div>
  );
}
