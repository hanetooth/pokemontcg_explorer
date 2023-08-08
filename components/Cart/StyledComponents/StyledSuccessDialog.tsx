'use client'

import React from "react";
import { styled } from "@mui/material";
import StyledDialog from "./StyledDialog";

export default styled(StyledDialog)`

  & .MuiDialog-container {
    align-items: flex-end;

    & .MuiDialog-paper {
      height: 362px;
      margin-bottom: 62px;
      padding: 20px;
    }
  }
`