'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

interface KitSelectionContextValue {
  selected: string
  setSelected: (id: string) => void
}

const KitSelectionContext = createContext<KitSelectionContextValue | null>(null)

export function KitSelectionProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState('k2')
  return (
    <KitSelectionContext.Provider value={{ selected, setSelected }}>
      {children}
    </KitSelectionContext.Provider>
  )
}

export function useKitSelection() {
  const ctx = useContext(KitSelectionContext)
  if (!ctx) throw new Error('useKitSelection must be used within KitSelectionProvider')
  return ctx
}
