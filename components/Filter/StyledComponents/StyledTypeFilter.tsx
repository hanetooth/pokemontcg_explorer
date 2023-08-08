'use client'

import { styled } from '@mui/material'
import BaseStyledFilter from './BaseStyledFilter'

export default styled(BaseStyledFilter)`
  @media (max-width: 600px) {
    width: 117px;

    & label {
      top: -6px;
      left: 18px;

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
          right: 30px;
        }
      }
    }
  }

  width: 70px;
  height: 35px;

  & label {
    font-size: 11px;

    top: -21%;
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
      border-left-color: #DFDFDF !important;
    }
  }
`