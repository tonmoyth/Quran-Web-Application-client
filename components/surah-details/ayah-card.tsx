import { Ayah } from "@/types/surah";
import { Card, CardContent } from "@/components/ui/card";

interface AyahCardProps {
  ayah: Ayah;
  searchQuery?: string;
}

export function AyahCard({ ayah, searchQuery }: AyahCardProps) {
  // Simple highlight function (could be improved with regex for case insensitivity)
  const renderTranslationWithHighlight = (text: string, query?: string) => {
    if (!query) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() ? 
            <mark key={i} className="bg-primary/20 text-primary px-1 rounded">{part}</mark> : 
            part
        )}
      </>
    );
  };

  return (
    <Card className="hover:bg-secondary/5 transition-colors duration-300 border border-border group">
      <CardContent className="p-6 md:p-8 flex flex-col space-y-6">
        <div className="flex justify-between items-start">
          <div className="flex flex-col space-y-1">
            <span className="w-10 h-10 rounded-full bg-secondary/20 text-secondary-foreground font-medium flex items-center justify-center shrink-0 border border-secondary/30">
              {ayah.numberInSurah}
            </span>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-2 opacity-60">
              Juz {ayah.juz} &bull; Page {ayah.page}
            </div>
          </div>
          
          <div className="w-full flex-grow text-right pl-8 md:pl-16">
            <p className="font-arabic text-3xl md:text-5xl leading-tight md:leading-normal text-primary rtl">
              {ayah.text}
            </p>
          </div>
        </div>
        
        <div className="border-t border-border/40 pt-4">
          <p className="text-lg md:text-xl text-foreground font-sans leading-relaxed">
            {renderTranslationWithHighlight(ayah.translation, searchQuery)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
