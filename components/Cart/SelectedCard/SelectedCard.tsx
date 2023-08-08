'use client'

import { ICard, ISelectedCard } from '@/types'
import React from 'react'
import {
  StyledContainer,
  StyledImage,
  StyledNameText,
  StyledPriceText,
  StyledQuantityText,
  StyledSetText,
  StyledTotalPriceLabel,
  StyledTotalPriceText,
  StyledQuantityUpdateButton,
  StyledActions,
} from './StyledComponents'
import { StyledBlock } from '@/components/shared'

import {
  Close as CloseIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from '@mui/icons-material'

interface ISelectedCardProps {
  id: string
  pokemonCard: ISelectedCard
  onQuantityIncrease: (id: string) => void
  onQuantityDecrease: (id: string) => void
}

export default function SelectedCard({ 
  id,
  pokemonCard: {
    name,
    imgSrc,
    price,
    quantity,
    stockLeft,
  }, onQuantityIncrease, onQuantityDecrease}: ISelectedCardProps) {

  const totalPrice = price * quantity

  const handleOnQuantityIncrease = () => {
    onQuantityIncrease(id)
  }

  const handleOnQuantityDecrease = () => {
    onQuantityDecrease(id)
  }

  return (
    <StyledContainer>
      <StyledImage
        alt={name}
        src={imgSrc}
        width={77}
        height={106}
      />

      <StyledBlock
        sx={{
          minHeight: '100%',
          width: '150px',
          paddingLeft: '16px',
        }}
      >
        <StyledNameText title={name}>
          { name }
        </StyledNameText>
        <StyledPriceText>
          <strong>${ price }</strong> per card
        </StyledPriceText>
        <StyledSetText>
          <strong>{ stockLeft }</strong> cards left
        </StyledSetText>
      </StyledBlock>

      <StyledBlock
        sx={{
          position: 'relative',
          minHeight: '100%',
          flex: 1,
        }}
      >
        <StyledActions>
          <StyledQuantityUpdateButton
            sx={{ transform: 'rotate(180deg)' }}
            startIcon={ <KeyboardArrowDownIcon sx={{ fontSize: '8px' }} /> }
            disabled={stockLeft < 1}
            onClick={handleOnQuantityIncrease}
          />
          <StyledQuantityUpdateButton
            startIcon={
              quantity === 1
               ? <CloseIcon className='close-icon' sx={{ fontSize: '8px' }} />
               : <KeyboardArrowDownIcon sx={{ fontSize: '8px' }} /> 
            }
            onClick={handleOnQuantityDecrease}
          />
        </StyledActions>
        <StyledQuantityText>{ quantity }</StyledQuantityText>
        <StyledTotalPriceLabel>price</StyledTotalPriceLabel>
        <StyledTotalPriceText>{ totalPrice.toFixed(2) }</StyledTotalPriceText>
      </StyledBlock>
      
    </StyledContainer>
  )
}