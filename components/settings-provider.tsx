"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export type ArabicFont = "amiri" | "scheherazade"

interface SettingsContextType {
  arabicFont: ArabicFont
  setArabicFont: (font: ArabicFont) => void
  arabicFontSize: number
  setArabicFontSize: (size: number) => void
  translationFontSize: number
  setTranslationFontSize: (size: number) => void
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [arabicFont, setArabicFont] = useState<ArabicFont>("amiri")
  const [arabicFontSize, setArabicFontSize] = useState<number>(30)
  const [translationFontSize, setTranslationFontSize] = useState<number>(16)
  const [mounted, setMounted] = useState(false)

  // Load from local storage
  useEffect(() => {
    const savedArabicFont = localStorage.getItem("arabicFont") as ArabicFont
    if (savedArabicFont) setArabicFont(savedArabicFont)
    
    const savedArabicSize = localStorage.getItem("arabicFontSize")
    if (savedArabicSize) setArabicFontSize(Number(savedArabicSize))

    const savedTranslationSize = localStorage.getItem("translationFontSize")
    if (savedTranslationSize) setTranslationFontSize(Number(savedTranslationSize))
      
    setMounted(true)
  }, [])

  // Save to local storage and update CSS
  useEffect(() => {
    if (!mounted) return
    localStorage.setItem("arabicFont", arabicFont)
    localStorage.setItem("arabicFontSize", arabicFontSize.toString())
    localStorage.setItem("translationFontSize", translationFontSize.toString())

    // Update global CSS variables so components don't have to listen to context explicitly for sizes
    document.documentElement.style.setProperty("--arabic-font-size", `${arabicFontSize}px`)
    document.documentElement.style.setProperty("--translation-font-size", `${translationFontSize}px`)
    document.documentElement.style.setProperty(
      "--font-arabic-dynamic", 
      arabicFont === "amiri" ? "var(--font-amiri)" : "var(--font-scheherazade)"
    )

  }, [arabicFont, arabicFontSize, translationFontSize, mounted])

  return (
    <SettingsContext.Provider value={{
      arabicFont, setArabicFont,
      arabicFontSize, setArabicFontSize,
      translationFontSize, setTranslationFontSize
    }}>
      <div className={!mounted ? "invisible" : ""}>
        {children}
      </div>
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider")
  }
  return context
}
