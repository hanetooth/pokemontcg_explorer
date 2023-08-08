'use client'

import variables from '@/styles/_variables.module.scss'
import { Typography, styled } from "@mui/material"

export default styled(Typography)`
  width: 100%;
  margin-top: 12px;
  padding-right: 13px;

  color: ${variables.primaryButtonColor};
  text-align: right;
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`