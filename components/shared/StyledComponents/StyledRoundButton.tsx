'use client'

import variables from '@/styles/_variables.module.scss'
import { Button, styled } from '@mui/material'

export default styled(Button)`
  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: none;
  white-space: nowrap;
  
  width: 217.233px;
  padding: 9px 51.23px 8.37px 52px;
  border-radius: 50px;
  
  box-shadow: ${variables.roundButtonShadow};
`