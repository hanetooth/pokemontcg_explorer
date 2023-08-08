'use client'

import variables from '@/styles/_variables.module.scss' 
import { Box, styled } from "@mui/material";
import { StyledBlock } from '@/components/shared';

export default styled(StyledBlock)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: ${variables.mainBg};
  width: 52px;
  height: 51px;
  box-shadow: ${variables.appBarShadow};
  z-index: -1;
`