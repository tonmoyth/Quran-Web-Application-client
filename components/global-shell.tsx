"use client"

import { useState } from "react"
import { Navbar } from "@/components/home/Navbar"
import { Footer } from "@/components/home/Footer"
import { SettingsDrawer } from "@/components/home/SettingsDrawer"

export function GlobalShell({ children }: { children: React.ReactNode }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  return (
    <>
      <Navbar onOpenSettings={() => setIsSettingsOpen(true)} />
      
      <main className="pt-24 min-h-screen">
        {children}
      </main>

      <Footer />
      
      <SettingsDrawer 
        open={isSettingsOpen} 
        onOpenChange={setIsSettingsOpen} 
      />
    </>
  )
}
