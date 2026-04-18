import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[870px] flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full opacity-5 bg-surface-container-highest"
        // style={{
        //   backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCN6p741O5pA7Pe7QM3nRCT-qOEFlJpnYCqi2-54fnlFiQcy_ZEdR3Kj1zL9J3jkwb8bTne6Id1QViQznIxhlK40HgNScSFa3D-8ZR3FVV_ChmU5It1oVPtlIG4xONQ7L_kD9L3kiCfms26NU45qViLJ-ft49RWER055Mnq4jpCP-py1PXefAjYafy5lN2PCQTEPqSfoBXTvBdMaighfjna0ckaVMJL1KhlH6SU21SoR_6lRWsY4wd-p977A67UBJwsciPnms8Nzbb5')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center"
        // }}
        />
      </div>
      <div className="relative z-10 max-w-4xl text-center">
        <span className="inline-block mb-6 px-4 py-1.5 bg-secondary-container text-on-secondary-container text-xs font-bold tracking-[0.2em] uppercase rounded-full">
          An Editorial Journey Through Revelation
        </span>
        <h1 className="font-serif text-7xl md:text-8xl text-primary font-extralight tracking-tight mb-8 leading-[1.1]">
          Experience the <br />
          <span className="italic font-normal">Divine Message</span>
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          A contemplative digital sanctuary for the study of the Noble Quran. Immerse yourself in the rhythm of the sacred text through an editorial lens of beauty and stillness.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/surahs">
            <Button className="bg-[linear-gradient(135deg,#342434_0%,#4b3a4b_100%)] text-white px-10 py-6 rounded-xl font-bold tracking-wide shadow-[0_20px_40px_-15px_rgba(75,58,75,0.4)] hover:shadow-[0_25px_50px_-15px_rgba(75,58,75,0.5)] hover:cursor-pointer  hover:-translate-y-0.5  transition-all duration-300 text-base">
              Read Surahs
            </Button>
          </Link>

        </div>
      </div>
    </section>
  )
}
