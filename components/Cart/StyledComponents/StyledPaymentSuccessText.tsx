'use client'

import variables from '@/styles/_variables.module.scss'
import { Typography, styled } from "@mui/material"

export default styled(Typography)`
  margin-top: 25px;

  color: ${variables.mainText};
  text-align: center;
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`