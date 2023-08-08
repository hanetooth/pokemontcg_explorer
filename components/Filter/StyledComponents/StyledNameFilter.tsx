'use client'

import variables from '@/styles/_variables.module.scss' 
import { styled } from '@mui/material'
import BaseStyledFilter from './BaseStyledFilter'

export default styled(BaseStyledFilter)`

  /* 
    'xs': Extra small screens (less than 600px)
    'sm': Small screens (600px and up)
    'md': Medium screens (960px and up)
    'lg': Large screens (1280px and up)
    'xl': Extra large screens (1920px and up)
  */

  @media (max-width: 600px) {
    width: 383px;
    margin-bottom: 16px;

    & .MuiInputBase-root {
      & .MuiOutlinedInput-notchedOutline {
        border-radius: 50px;
        border-radius: 50px;
      }
    }
  }

  width: 177px;
  height: 35px;

  & label {
    font-size: 14px;
  }

  & .MuiInputBase-root {
    height: 35px;
    padding: 0;

    & input.MuiAutocomplete-input {
      padding: 0 0 0 24px;
      font-size: 14px;
    }
    
    & .MuiOutlinedInput-notchedOutline {
      border: none;

      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;

      box-shadow: ${variables.boxShadow};
    }
  }
`