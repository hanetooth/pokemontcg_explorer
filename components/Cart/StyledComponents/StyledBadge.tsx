'use client'

import variables from '@/styles/_variables.module.scss'
import { Badge, styled } from "@mui/material"

export default styled(Badge)`
  & .MuiBadge-badge {
    background: ${variables.cartBadgeBg};

    color: ${variables.mainBg};
    font-variant-numeric: lining-nums tabular-nums;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`