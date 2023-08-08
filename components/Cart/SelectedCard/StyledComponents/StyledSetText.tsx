'use client'

import variables from '@/styles/_variables.module.scss'
import { Typography, styled } from "@mui/material"

export default styled(Typography)`
  width: 100%;

  color: ${variables.inputPlaceholderTextColor};
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  padding-top: 23px;

  & strong {
    color: ${variables.dangerColor};
    font-weight: 600;
  }
`