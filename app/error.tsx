'use client'

import { StyledCloseCartButton, StyledPaymentSuccessText, StyledSuccessDialog } from '@/components/Cart/StyledComponents'
import { StyledGrid } from '@/components/shared'
import { Zoom } from '@mui/material'
import {
  Error as ErrorIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import React, { useState } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  const [openErrorDialog, setOpenErrorDialog] = useState(true)
  const handleCloseErrorDialog = () => {
    setOpenErrorDialog(false)
  }
  console.debug('error', {
    error, reset
  })
  return (
    <StyledSuccessDialog
      open={ openErrorDialog }
    >
      <StyledGrid container>
        <Zoom timeout={1000} in={openErrorDialog}>
          <StyledGrid item xs={12} sx={{ marginTop: '99px', textAlign: 'center' }}>
            <ErrorIcon sx={{ fontSize: '110px' }}/>
          </StyledGrid>
        </Zoom>
        <StyledGrid item xs={12}>
          <StyledPaymentSuccessText>Error occured!</StyledPaymentSuccessText>
        </StyledGrid>
      </StyledGrid>

      <StyledCloseCartButton variant="contained" onClick={handleCloseErrorDialog}>
        <CloseIcon sx={{ fontSize: '16px' }} />
      </StyledCloseCartButton>
    </StyledSuccessDialog>
  )
}