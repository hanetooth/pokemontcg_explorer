'use client'

import variables from '@/styles/_variables.module.scss'
import { StyledRoundButton } from '@/components/shared/'
import { styled } from '@mui/material'

export default styled(StyledRoundButton)`
  color: ${variables.mainBg};
  background-color: ${variables.primaryButtonColor};
  
  /* background-color: ${variables.cardButtonColor};

  &.card__select-button--selected,
  &:hover {
    color: ${variables.mainBg};
    background-color: ${variables.mainText};
  } */
`