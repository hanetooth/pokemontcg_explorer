'use client'

import variables from '@/styles/_variables.module.scss'
import { styled } from "@mui/material"

export default styled('div')`
  background-image: linear-gradient(to bottom, transparent 58px, ${variables.mainBg} 58px);
  width: 100%;
  height: 274px;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`