'use client'

import variables from '@/styles/_variables.module.scss'
import { Dialog, styled } from "@mui/material"

export default styled(Dialog)`

  & .MuiModal-backdrop {
    opacity: 0 !important;
  }

  & .MuiDialog-paper {
    // making sure to absolutely position the dialog actoins
    position: relative;
    overflow: visible;

    width: 416px;
    height: 613px;
    padding-bottom: 216px;

    border-radius: 20px;
    background: ${variables.mainBg};

    box-shadow: ${variables.dialogShadow};
  }
`