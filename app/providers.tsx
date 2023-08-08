'use client'

import {
  ThemeRegistryProvider
} from 'providers'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeRegistryProvider options={{ key: 'mui' }}>
      {children}
    </ThemeRegistryProvider>
  )
}