'use client'

import variables from '@/styles/_variables.module.scss'
import { Button, styled } from "@mui/material"

export default styled(Button)`
  color: ${variables.mainBg};
  background-color: ${variables.dangerColor};
  min-width: 35px;
  width: 35px;
  height: 35px;
  padding: 0px;
  border-radius: 10px;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);

  box-shadow: ${variables.cartButtonShadow};

  &:hover {
    background-color: ${variables.dangerColorDark};
  }
`