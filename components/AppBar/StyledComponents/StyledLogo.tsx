'use client'

import variables from '@/styles/_variables.module.scss' 
import { styled } from "@mui/material";

export default styled('a')`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 40%);

  cursor: pointer;
`