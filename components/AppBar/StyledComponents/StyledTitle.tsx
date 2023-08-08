'use client'

import variables from '@/styles/_variables.module.scss' 
import { Typography, styled } from "@mui/material";

export default styled('a')`
  color: ${variables.mainText};
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  text-decoration: none;

  flex-grow: 1;
  cursor: pointer;
`