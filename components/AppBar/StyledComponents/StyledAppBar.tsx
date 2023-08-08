'use client'

import variables from '@/styles/_variables.module.scss' 
import { AppBar, styled } from "@mui/material";

export default styled(AppBar)`
  position: relative;
  background-color: ${variables.mainBg};
  height: 77px;
  box-shadow: ${variables.appBarShadow};
  z-index: 1;
`