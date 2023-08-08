'use client'

import variables from '@/styles/_variables.module.scss'
import { Button, styled } from "@mui/material"

export default styled(Button)`
  background-color: ${variables.primaryButtonColor};
  height: 35px;
  padding: 0px 14px 0px 7px;
  border-radius: 10px;

  color: ${variables.mainBg};
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  
  box-shadow: ${variables.cartButtonShadow};

  & .MuiButton-startIcon {
    margin-left: 0;
  }
`