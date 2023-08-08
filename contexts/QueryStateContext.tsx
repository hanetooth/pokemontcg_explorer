'use client'

import { createContext } from "react"
import { IisQueryingContext } from 'types'

const isQuerying = false;

export const QueryStateContext = createContext<IisQueryingContext>({ isQuerying, setIsQuerying: () => {} })