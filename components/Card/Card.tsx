'use client'

import {
  Grid,
  Grow,
  Slide,
  Zoom
} from '@mui/material'
import Image from 'next/image'
import { ICard, ISelectedCard } from 'types'
import {
  StyledCard,
  StyledCardActions,
  StyledCardContent,
  StyledCardHeader,
  StyledCardMedia,
  StyledCardSelectButton,
  StyledContainer,
  StyledPriceText,
  StyledRarityText,
  StyledSetText,
} from './StyledComponents'
import { useEffect, useRef, useState } from 'react'

interface CardProps {
  id: string
  index: number
  pokemonCard: ICard
  isSelected: boolean
  onSelectCallBack: (id: string, pokemonCard: ISelectedCard) => void
}

export default function Card({id, index, pokemonCard, isSelected, onSelectCallBack }: CardProps) {
  const [ shouldAnimateNow, setShouldAnimateNow ] = useState(false)
  const isOutOfStock = !pokemonCard.stockLeft

  const handleOnSelect = () => {
    onSelectCallBack(id, {
      quantity: 1,
      ...pokemonCard
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setShouldAnimateNow(true)
    }, index * 100)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StyledContainer>
      <Zoom in={shouldAnimateNow}>
        <StyledCard>
          <StyledCardMedia>
            <Slide timeout={500} direction='up' in={shouldAnimateNow}>
              <Image alt={pokemonCard.name} src={pokemonCard.imgSrc} width={194.367} height={271.133}/>
            </Slide>
          </StyledCardMedia>
          <StyledCardHeader title={pokemonCard.name || 'Name: unknown'}/>
          <StyledCardContent>
            <StyledRarityText>{ pokemonCard.rarity || 'Rarity: unknown' }</StyledRarityText>
            <Grid container>
              <Grid item xs={6}>
                <StyledPriceText>
                  { `$ ${pokemonCard.price}` || 'Price: unknown' }
                </StyledPriceText>
              </Grid>
              <Grid item xs={6}>
                <StyledSetText>
                  { `${pokemonCard.stockLeft} left` || 'Amount: unknown' }
                </StyledSetText>
              </Grid>
            </Grid>
          </StyledCardContent>
          <StyledCardActions>
            <Zoom timeout={1000} in={shouldAnimateNow}>
              <StyledCardSelectButton
                className={
                  isSelected ? 'card__select-button--selected' : ''
                }
                variant='contained'
                onClick={handleOnSelect}
                disabled={isOutOfStock}
              >
                {
                  isOutOfStock 
                    ? 'Out of stock'
                    : `${ isSelected ? 'Selected' : 'Select' } card`
                }
              </StyledCardSelectButton>
            </Zoom>
          </StyledCardActions>
        </StyledCard>
      </Zoom>
    </StyledContainer>
  )
}