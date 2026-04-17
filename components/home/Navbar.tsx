import { Search, Settings } from "lucide-react"
import Link from "next/link";

interface NavbarProps {
  onOpenSettings: () => void;
}

export function Navbar({ onOpenSettings }: NavbarProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-background-custom/80 dark:bg-on-background/80 backdrop-blur-xl shadow-[0_40px_60px_-5px_rgba(27,28,29,0.06)]">
      <nav className="flex justify-between items-center px-12 py-4 w-full max-w-screen-2xl mx-auto">
        <div className="text-2xl font-bold text-primary font-serif tracking-tight">
          <Link href="/">The Sacred Editorial</Link>
        </div>
        <div className="hidden md:flex items-center space-x-12 font-serif tracking-tight">
          <Link className="text-primary border-b-2 border-primary pb-1" href="/">Home</Link>
          <Link className="text-primary/60 hover:text-primary hover:bg-secondary/20 transition-colors duration-300 px-2 py-1 rounded" href="/surah">Surah List</Link>

        </div>
        <div className="flex items-center space-x-6">
          {/* <button className="p-2 text-primary hover:bg-secondary/20 transition-colors rounded-full">
            <Search className="w-6 h-6 stroke-[1.5]" />
          </button> */}
          <button onClick={onOpenSettings} className="p-2 text-primary hover:bg-secondary/20 transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50">
            <Settings className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>
      </nav>
    </header>
  )
}
