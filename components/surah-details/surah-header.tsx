import { SurahDetails } from "@/types/surah";


interface SurahHeaderProps {
  surah: SurahDetails;
}

export function SurahHeader({ surah }: SurahHeaderProps) {
  return (
    <div className="sticky top-15 z-10 w-full bg-background/80 backdrop-blur-md border-b border-border py-8 px-4 flex flex-col items-center justify-center space-y-4">
      <div className="flex flex-col items-center space-y-2 text-center">
        <h1 className="font-arabic text-5xl md:text-6xl text-primary rtl">
          {surah.name}
        </h1>
        <h2 className="font-heading text-2xl font-bold text-foreground mt-2">
          {surah.englishName}
        </h2>
        <p className="text-muted-foreground translation-text italic">
          {surah.englishNameTranslation}
        </p>
      </div>

      <div className="flex items-center space-x-2 pt-2">
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium border border-border px-3 py-1 rounded-full">
          {surah.revelationType}
        </span>
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium border border-border px-3 py-1 rounded-full">
          {surah.numberOfAyahs} Ayahs
        </span>
      </div>
    </div>
  );
}
