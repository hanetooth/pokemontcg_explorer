'use client'

import React, { useEffect } from 'react';
import { StyledAppBar, StyledLogo, StyledLogoBg, StyledTitle } from './StyledComponents';
import {
  Toolbar,
 } from '@mui/material'
import { Logo } from '@/icons';

export default function ButtonAppBar() {

  useEffect(() => {
    const setMainHeight = () => {
      const header = document.querySelector('header')
      const mainContainer = document.querySelector('main')
      if (!header || !mainContainer) return

      const remainingHeight = window.innerHeight - header.clientHeight
      mainContainer.style.minHeight = `${remainingHeight}px`
      mainContainer.style.maxHeight = `${remainingHeight}px`
    }
    setMainHeight()
    window.addEventListener('resize', setMainHeight)
  }, [])

  return (
    <StyledAppBar position="static">
      <Toolbar sx={{position: 'relative'}}>
        <StyledTitle href='/' tabIndex={-1}>
          TCG Marketplace
        </StyledTitle>
      </Toolbar>
      <StyledLogo href='/' tabIndex={-1}>
        <Logo/>
        <StyledLogoBg />
      </StyledLogo>
    </StyledAppBar>
  );
}