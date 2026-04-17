import { ArrowRight, BookOpen } from "lucide-react"

export function FeaturedSection() {
  return (
    <section className="max-w-screen-2xl mx-auto px-12 py-24 bg-background">
      <div className="grid grid-cols-12 gap-8">
        {/* Asymmetric Featured Reading */}
        <div className="col-span-12 lg:col-span-7 bg-background border border-primary/10 rounded-[2rem] p-12 flex flex-col justify-between min-h-[500px]">
          <div>
            <div className="flex justify-between items-start mb-12">
              <h2 className="font-serif text-4xl text-primary">Surah Al-Fatihah</h2>
              <span className="text-4xl font-arabic text-primary" dir="rtl" style={{ fontFamily: "var(--font-arabic-dynamic, var(--font-amiri))" }}>الفاتحة</span>
            </div>
            <div className="space-y-8">
              <div className="group">
                <p className="text-3xl font-arabic text-primary mb-2 opacity-80" dir="rtl" style={{ fontFamily: "var(--font-arabic-dynamic, var(--font-amiri))", fontSize: "var(--arabic-font-size, 30px)" }}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                <p className="text-text/70 font-light italic" style={{ fontSize: "var(--translation-font-size, 16px)" }}>In the name of Allah, the Entirely Merciful, the Especially Merciful.</p>
              </div>
              <div className="group">
                <p className="text-3xl font-arabic text-primary mb-2 opacity-80" dir="rtl" style={{ fontFamily: "var(--font-arabic-dynamic, var(--font-amiri))", fontSize: "var(--arabic-font-size, 30px)" }}>الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</p>
                <p className="text-text/70 font-light italic" style={{ fontSize: "var(--translation-font-size, 16px)" }}>[All] praise is [due] to Allah, Lord of the worlds -</p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <a className="inline-flex items-center text-primary font-bold group hover:opacity-80" href="#">
              Continue Reading
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Vertical Cards */}
        <div className="col-span-12 lg:col-span-5 grid grid-rows-2 gap-8">
          <div className="bg-primary/5 rounded-[2rem] p-10 flex items-center justify-between hover:-translate-y-1 transition-transform duration-300 border border-primary/10">
            <div>
              <h3 className="font-serif text-2xl text-primary mb-2">Reflect</h3>
              <p className="text-text/70 text-sm font-light">Explore themed collections of verses curated for spiritual growth.</p>
            </div>
            <div className="w-20 h-20 shrink-0 bg-secondary/20 rounded-2xl flex items-center justify-center">
              <BookOpen className="text-primary w-8 h-8 stroke-[1.5]" />
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-[2rem] p-10 flex flex-col justify-end relative overflow-hidden group">
            <div 
              className="absolute inset-0 opacity-20 group-hover:scale-105 transition-transform duration-700 mix-blend-overlay" 
              style={{ 
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1f4gh4UC2TXv7NriBD1oUP-op9i7M-pe9flJj6HcjY4rd1L7UDisPDoq3mgy2qzu9rJ_8ScvsaUNxO0nVD7NaHSIoT994gnq1RVsacNefTuxN45WfnC0IFEcoxbfDg8FpmALDbllS3c-KrAn34jlJJ6LLM6DkgAN7liJ7YV8WMSCQQXDWE8Od2GCm1rNU-dfpTZhRpxBoupIcsFMTt_YHhah4h9PfZDY-ae21I96B6RYBgV0zDqIzF5SqYaoE3V_gDsqqJLZkhc4M')", 
                backgroundSize: "cover" 
              }}
            />
            <div className="relative z-10">
              <h3 className="font-serif text-3xl mb-4 italic text-background">Audio Experience</h3>
              <p className="text-background/80 text-sm font-light mb-6">Listen to world-renowned reciters in high fidelity with focus mode.</p>
              <button className="bg-background text-primary px-6 py-2 rounded-lg text-sm font-bold w-fit hover:scale-105 transition-transform">
                Open Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
