'use client'

import React, { useState } from 'react'
import { SelectedCardsContext } from '@/contexts'
import { ISelectedCards } from '@/types'

export default function SelectedCardsContextProvider({ children }: { children: React.ReactNode }) {
  const [ selectedCards, setSelectedCards ] = useState<ISelectedCards>(new Map())
  return (
    <SelectedCardsContext.Provider
      value={{ selectedCards, setSelectedCards }}>
        {children}
    </SelectedCardsContext.Provider>
  )
}