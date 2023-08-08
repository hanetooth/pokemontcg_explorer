'use client'

import variables from '@/styles/_variables.module.scss'
import { Autocomplete, styled } from '@mui/material'

export default styled(Autocomplete)`
  /* border: 1px solid !important; // debugging */

  & label {
    color: ${variables.inputPlaceholderTextColor};
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    top: -25%;
    left: 0;

    &.Mui-focused,
    &.MuiFormLabel-filled {
      display: none;
    }
  }

  & .MuiInputBase-root {
    height: 35px;
    padding: 0;

    & .MuiAutocomplete-endAdornment {
      right: 12px;

      & .MuiAutocomplete-clearIndicator {
        padding-right: 0;

        &:hover {
          background-color: transparent;
        }

        & svg {
          width: 14px;
        }
      }
    }

    & input.MuiAutocomplete-input {
      height: 35px;
      padding: 0 0 0 12px;
      color: ${({ theme }) => theme.palette.text.primary};
      font-family: Poppins;
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    
    & .MuiOutlinedInput-notchedOutline {
      box-shadow: ${variables.boxShadow};
    }
  }
`