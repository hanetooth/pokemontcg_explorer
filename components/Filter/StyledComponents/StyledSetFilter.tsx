'use client'

import { styled } from '@mui/material'
import BaseStyledFilter from './BaseStyledFilter'

export default styled(BaseStyledFilter)`
  @media (max-width: 600px) {
    width: 117px;
    margin-left: 16px;

    & label {
      top: -6px;
      left: 25px !important;
      
      &.Mui-focused {
        display: none;
      }
    }

    & .MuiInputBase-root {
      & .MuiOutlinedInput-notchedOutline {
        border: none;
        border-radius: 50px;
      }

      .MuiAutocomplete-popupIndicator {
        top: 2px;
      }

      &:not(.Mui-focused) {
        .MuiAutocomplete-popupIndicator {
          right: 25px;
        }
      }
    }
  }

  width: 61px;
  height: 35px;

  & label {
    font-size: 11px;

    top: -21%;
    left: 1px;
  }

  & .MuiInputBase-root {
    border-radius: 0px;
    
    &.MuiAutocomplete-hasPopupIcon,
    &.MuiOutlinedInput-root {
      padding-right: 30px;
    }
    
    & .MuiOutlinedInput-notchedOutline {
      border-top: none;
      border-bottom: none;
      border-right: none;
      border-left-color: #DFDFDF;

      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
    }
  }
`