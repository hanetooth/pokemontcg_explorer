'use client'

import variables from '@/styles/_variables.module.scss' 
import { Container, styled } from '@mui/material'

export default styled(Container)`

  @media (min-width: 1200px) {
    max-width: 1028px;
  }

  margin-top: 40px;
  background: transparent;
  box-shadow: none;
`