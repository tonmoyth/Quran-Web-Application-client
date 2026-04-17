import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useSettings, ArabicFont } from "@/components/settings-provider"
import { Type, Settings2 } from "lucide-react"

interface SettingsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SettingsDrawer({ open, onOpenChange }: SettingsDrawerProps) {
  const { 
    arabicFont, setArabicFont, 
    arabicFontSize, setArabicFontSize,
    translationFontSize, setTranslationFontSize
  } = useSettings()

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[320px] sm:w-[400px] bg-background border-l border-primary/20 p-0 overflow-y-auto">
        <SheetHeader className="pt-24 px-6 text-left border-b border-primary/10 pb-6">
          <SheetTitle className="font-serif text-2xl text-primary">Settings</SheetTitle>
          <SheetDescription className="font-sans text-xs text-text/60 uppercase tracking-widest pt-2">
            Personalize your reading experience
          </SheetDescription>
        </SheetHeader>
        
        <div className="flex flex-col p-6 space-y-8">
          
          {/* Arabic Font Selection */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-primary">
              <Type className="w-5 h-5 stroke-[1.5]" />
              <h3 className="font-bold text-sm uppercase tracking-widest">Arabic Font</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setArabicFont("amiri")}
                className={`p-3 rounded-lg border flex flex-col items-center justify-center transition-all ${
                  arabicFont === "amiri" 
                    ? "border-primary bg-primary text-primary-foreground" 
                    : "border-primary/20 text-primary hover:bg-secondary/20"
                }`}
              >
                <span className="text-2xl font-arabic" style={{ fontFamily: "var(--font-amiri)" }}>الله</span>
                <span className="text-xs mt-2 uppercase tracking-wide">Amiri</span>
              </button>
              
              <button 
                onClick={() => setArabicFont("scheherazade")}
                className={`p-3 rounded-lg border flex flex-col items-center justify-center transition-all ${
                  arabicFont === "scheherazade" 
                    ? "border-primary bg-primary text-primary-foreground" 
                    : "border-primary/20 text-primary hover:bg-secondary/20"
                }`}
              >
                <span className="text-2xl font-arabic" style={{ fontFamily: "var(--font-scheherazade)" }}>الله</span>
                <span className="text-xs mt-2 uppercase tracking-wide">Scheherazade</span>
              </button>
            </div>
          </div>
          
          <div className="h-px bg-primary/10 w-full" />

          {/* Arabic Font Size */}
          <div className="space-y-6">
            <div className="flex items-center justify-between text-primary">
              <div className="flex items-center space-x-2">
                <Settings2 className="w-5 h-5 stroke-[1.5]" />
                <h3 className="font-bold text-sm uppercase tracking-widest">Arabic Size</h3>
              </div>
              <span className="text-sm rounded bg-secondary/30 px-2 py-1">{arabicFontSize}px</span>
            </div>
            
            <input 
              type="range" 
              min="20" 
              max="60" 
              value={arabicFontSize}
              onChange={(e) => setArabicFontSize(Number(e.target.value))}
              className="w-full accent-primary"
            />
            
            {/* Live Preview */}
            <div className="bg-secondary/10 p-4 rounded-xl text-center min-h-[100px] flex items-center justify-center break-words">
               <p 
                dir="rtl" 
                className="text-primary leading-loose" 
                style={{ 
                  fontFamily: `var(--font-${arabicFont})`,
                  fontSize: `${arabicFontSize}px` 
                }}
              >بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            </div>
          </div>
          
          <div className="h-px bg-primary/10 w-full" />

          {/* Translation Font Size */}
          <div className="space-y-6 pb-12">
            <div className="flex items-center justify-between text-primary">
              <div className="flex items-center space-x-2">
                <Settings2 className="w-5 h-5 stroke-[1.5]" />
                <h3 className="font-bold text-sm uppercase tracking-widest">Translation Size</h3>
              </div>
              <span className="text-sm rounded bg-secondary/30 px-2 py-1">{translationFontSize}px</span>
            </div>
            
            <input 
              type="range" 
              min="12" 
              max="30" 
              value={translationFontSize}
              onChange={(e) => setTranslationFontSize(Number(e.target.value))}
              className="w-full accent-primary"
            />
            
            {/* Live Preview */}
            <div className="bg-secondary/10 p-4 rounded-xl text-center min-h-[80px] flex items-center justify-center">
               <p 
                className="text-text/80 font-light italic" 
                style={{ fontSize: `${translationFontSize}px` }}
              >In the name of Allah...</p>
            </div>
          </div>

        </div>
      </SheetContent>
    </Sheet>
  )
}
