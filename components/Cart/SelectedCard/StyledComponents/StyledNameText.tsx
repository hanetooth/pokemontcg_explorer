'use client'

import variables from '@/styles/_variables.module.scss'
import { Typography, styled } from "@mui/material"

export default styled(Typography)`
  width: 150px;
  margin-top: 6px;

  color: ${variables.mainText};
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`