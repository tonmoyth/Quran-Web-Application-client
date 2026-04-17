import { Manrope, Newsreader, Amiri, Scheherazade_New } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SettingsProvider } from "@/components/settings-provider"
import { GlobalShell } from "@/components/global-shell"
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
})

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  style: ["normal", "italic"],
})

const scheherazade = Scheherazade_New({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-scheherazade",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", manrope.variable, newsreader.variable, amiri.variable, scheherazade.variable)}
    >
      <body className="font-sans antialiased text-text bg-background transition-colors duration-300">
        <ThemeProvider defaultTheme="light">
          <SettingsProvider>
            <GlobalShell>
              {children}
            </GlobalShell>
          </SettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
