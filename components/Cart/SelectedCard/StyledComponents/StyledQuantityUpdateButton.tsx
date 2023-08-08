'use client'

import variables from '@/styles/_variables.module.scss'
import { Button, styled } from "@mui/material";

export default styled(Button)`
  min-width: unset;
  width: 14px;
  height: 14px;
  padding: 0px;
  display: block;
  color: ${variables.primaryButtonColor};

  & .MuiButton-startIcon {
    width: 100%;
    height: 100%;
    margin: 0px;

    & .MuiSvgIcon-root {
      display: block;
      width: 14px;
      height: 14px;
    }

    & .close-icon {
      color: ${variables.dangerColor};
    }
  }
`;