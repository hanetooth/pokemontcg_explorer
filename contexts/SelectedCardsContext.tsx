'use client'

import { ISelectedCardsContext } from "@/types"
import React, { createContext } from "react"

export const SelectedCardsContext = createContext<ISelectedCardsContext>(
  { selectedCards: new Map(), setSelectedCards: () => {}}
)