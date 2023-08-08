import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'

// Material UI fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css'; // used
import '@fontsource/roboto/700.css';

import '@/styles/globals.scss'

import type { Metadata } from 'next'
import Providers from './providers';
import { Grid } from '@mui/material';
import { AppBar, Cart, Filter } from '@/components';
import { QueryStateContextProvider, SelectedCardsContextProvider } from '@/providers';

export const metadata: Metadata = {
  title: 'Pokemon TCG App',
  description: 'A window to expolore the amazing world of Pokemons',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Grid flexDirection='column' className='page'>
            <AppBar />
            <QueryStateContextProvider>
              <SelectedCardsContextProvider>
                <Grid
                  container
                  component='main'
                  flexDirection='column'
                  sx={{ flex: 1 }}
                  className='hide-scrollbar'
                >
                  <Grid item container xs={12}>
                    <Filter />
                  </Grid>
                  <Grid item container xs={12} sx={{ flexGrow: '1' }}>
                    {children}
                  </Grid>
                </Grid>
                <Cart />
              </SelectedCardsContextProvider>
            </QueryStateContextProvider>
          </Grid>
        </Providers>
      </body>
    </html>
  )
}
