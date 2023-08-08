'use client'

import variables from '@/styles/_variables.module.scss'
import { StyledBlock } from '@/components/shared';
import { styled } from "@mui/material";

export default styled(StyledBlock)`
  max-width: 14px;
  max-height: 28px;
  padding: 0px;

  position: absolute;
  top: 2px;
  right: -4px;
`;