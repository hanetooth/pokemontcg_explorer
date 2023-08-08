'use client'

import variables from '@/styles/_variables.module.scss'
import { StyledRoundButton } from '@/components/shared/'
import { styled } from '@mui/material'

export default styled(StyledRoundButton)`
  color: ${variables.mainText};
  
  background-color: ${variables.cardButtonColor};

  &:hover {
    background-color: ${variables.cardButtonColor};
  }

  &.card__select-button--selected {
    color: ${variables.mainBg};
    background-color: ${variables.mainText};
  }

  &.Mui-disabled {
    background: #ccc;
    color: #808080;
  }
`