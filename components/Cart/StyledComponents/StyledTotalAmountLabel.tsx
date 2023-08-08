'use client'

import variables from '@/styles/_variables.module.scss'
import { Typography, styled } from "@mui/material"

export default styled(Typography)`
  color: ${variables.mainText};
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  text-align: right;

  padding-right: 17px;
`