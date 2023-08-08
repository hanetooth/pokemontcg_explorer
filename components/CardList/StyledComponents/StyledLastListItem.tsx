'use client'

import variables from '@/styles/_variables.module.scss' 
import { Grid, styled } from '@mui/material'

export default styled(Grid)`
  text-align: center;
  // padding top is to disobey the 80px rowSpacing
  padding: 60.27px 20px 110px 20px !important;
`