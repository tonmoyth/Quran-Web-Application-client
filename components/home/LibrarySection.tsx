import { Filter, Grid } from "lucide-react"

export function LibrarySection() {
  const surahs = [
    { number: "001", arabic: "الفاتحة", english: "Al-Fatihah", description: "The Opener • 7 Ayahs" },
    { number: "002", arabic: "البقرة", english: "Al-Baqarah", description: "The Cow • 286 Ayahs" },
    { number: "003", arabic: "آل عمران", english: "Ali 'Imran", description: "Family of Imran • 200 Ayahs" },
    { number: "004", arabic: "النساء", english: "An-Nisa", description: "The Women • 176 Ayahs" },
    { number: "005", arabic: "المائدة", english: "Al-Ma'idah", description: "The Table Spread • 120 Ayahs" },
    { number: "006", arabic: "الأنعام", english: "Al-An'am", description: "The Cattle • 165 Ayahs" },
    { number: "007", arabic: "الأعراف", english: "Al-A'raf", description: "The Heights • 206 Ayahs" },
    { number: "008", arabic: "الأنفال", english: "Al-Anfal", description: "The Spoils of War • 75 Ayahs" },
  ]

  return (
    <section className="max-w-screen-2xl mx-auto px-12 py-32 bg-background">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <h2 className="font-serif text-5xl text-primary mb-6">The Library</h2>
          <p className="text-text/70 font-light leading-relaxed">
            Navigate the 114 chapters. Every Surah is meticulously typeset to preserve the dignity of the text while ensuring modern digital legibility.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="p-4 rounded-full border border-primary/20 hover:bg-secondary/10 transition-colors">
            <Filter className="w-5 h-5 stroke-[1.5] text-primary" />
          </button>
          <button className="p-4 rounded-full border border-primary/20 hover:bg-secondary/10 transition-colors">
            <Grid className="w-5 h-5 stroke-[1.5] text-primary" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {surahs.map((surah) => (
          <div key={surah.number} className="group bg-background hover:bg-secondary/10 border border-primary/10 p-8 transition-colors duration-300 cursor-pointer rounded-xl hover:border-primary/30 shadow-sm hover:shadow">
            <div className="flex justify-between items-start mb-8">
              <span className="text-xs font-bold tracking-widest text-primary/50">{surah.number}</span>
              <span className="text-2xl font-arabic text-primary" dir="rtl" style={{ fontFamily: "var(--font-arabic-dynamic, var(--font-amiri))" }}>{surah.arabic}</span>
            </div>
            <h4 className="font-serif text-2xl text-primary mb-1">{surah.english}</h4>
            <p className="text-xs text-text/60 uppercase tracking-widest">{surah.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <button className="text-primary font-bold border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
          View Full Surah Index
        </button>
      </div>
    </section>
  )
}
