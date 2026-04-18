import Link from "next/link";
import { Surah } from "@/types/surah";
import { Card, CardContent } from "@/components/ui/card";

interface SurahCardProps {
  surah: Surah;
}

export function SurahCard({ surah }: SurahCardProps) {
  return (
    <Link href={`/surahs/${surah.id}`}>
      <Card className="group h-full transition-all duration-300 hover:bg-secondary/10 hover:border-secondary/30 hover:shadow-md cursor-pointer border border-border">
        <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
          <div className="flex justify-between items-start w-full">
            <span className="text-sm rounded-full bg-secondary/20 text-secondary-foreground font-medium w-8 h-8 flex items-center justify-center shrink-0">
              {surah.id}
            </span>
            <span className="font-arabic text-2xl text-primary text-right rtl">
              {surah.name}
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {surah.englishName}
            </h3>
            <p className="text-sm text-muted-foreground italic translation-text">
              {surah.englishNameTranslation}
            </p>
          </div>

          <div className="pt-2 border-t border-border/50 text-xs text-muted-foreground uppercase tracking-widest font-medium">
            {surah.numberOfAyahs} Ayahs &bull; {surah.revelationType}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
