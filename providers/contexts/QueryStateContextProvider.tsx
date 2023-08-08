'use client'

import { QueryStateContext } from 'contexts'
import { useState } from 'react'

export function QueryStateContextProvider({ children }: { children: React.ReactNode }) {
  const [ isQuerying, setIsQuerying ] = useState(false)
  return (
    <QueryStateContext.Provider
      value={{ isQuerying, setIsQuerying }}>
        {children}
    </QueryStateContext.Provider>
  )
}