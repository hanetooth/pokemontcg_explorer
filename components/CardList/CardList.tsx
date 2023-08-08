'use client'
import { Card } from '@/components'
import { StyledCardSkeleton } from '@/components/shared'
import { usePagination } from '@/hooks'
import {
  Grid
} from '@mui/material'
import { QueryStateContext, SelectedCardsContext } from 'contexts'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { ICards, ISelectedCard } from 'types'
import { StyledPaymentSuccessText } from '../Cart/StyledComponents'
import { StyledGridItem } from '../Loading/StyledComponents'
import ShowMoreButton from './ShowMoreButton'
import { StyledContainer, StyledLastListItem, StyledListItem } from './StyledComponents'
import ErrorIcon from '@mui/icons-material/Error'

interface CardListProps {
  cards: ICards
  page: number,
  pageSize: number,
  totalCount: number,
}

function CardList({ cards, page, pageSize, totalCount }: CardListProps) {
  const { selectedCards, setSelectedCards } = useContext(SelectedCardsContext)
  const { isQuerying, setIsQuerying } = useContext(QueryStateContext)

  const { paginate } = usePagination(page)
  const [ isPaginating, setIsPaginating ] = useState(false)
  const prevPokemonCardsRef = useRef<ICards>(new Map())
  const isPaginatable = (pageSize * page) < totalCount

  useEffect(() => {
    setIsQuerying(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ cards ])

  useEffect(() => {
    setIsPaginating(false)
  }, [ page ])
  
  const mergeCards = () => {
    if (page > 1) {
      return new Map([...prevPokemonCardsRef.current, ...cards])
    }
    prevPokemonCardsRef.current = new Map()
    return cards
  }

  // Intententionally ignore the warning xD
  // inserting the mergeCards function as a dependency 
  // will break the useMemo ability to cache the cards
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mergedCards = useMemo(mergeCards, [ page, pageSize, totalCount ])

  const preserveCards = () => {
    prevPokemonCardsRef.current = mergedCards
  }

  const handlePagination = () => {
    setIsPaginating(true)
    preserveCards()
    paginate()
  }

  const onCardSelect = (id: string, { stockLeft, ...restPokemonCard }: ISelectedCard) => {
    setSelectedCards((prevSelectedCards) => {
      const newSelectedCards = new Map(prevSelectedCards)
      if (newSelectedCards.has(id)) {
        newSelectedCards.delete(id)
      } else {
        newSelectedCards.set(id, {
          stockLeft: stockLeft - 1,
          ...restPokemonCard
        })
      }
      return newSelectedCards
    })
  }

  const cardComponents: React.ReactNode[] = []
  let cardIndex = 1 // to animate

  mergedCards.forEach((card, id) => {
    const isSelected = selectedCards.has(id)
    cardComponents.push(
      <StyledListItem item sm={12} md={6} lg={4} key={id}>
        <Card id={id} index={cardIndex} pokemonCard={card} isSelected={isSelected} onSelectCallBack={onCardSelect}/>
      </StyledListItem>
    )
    cardIndex++
  })

  return (
    <StyledContainer>
      <Grid container rowSpacing='80px'>
        { cards.size ?
            (
              <>
                {
                  !isQuerying && cardComponents
                }

                {
                  (isPaginating || isQuerying) &&
                    Array.from({ length: 6 }, (_, index) => (
                      <StyledGridItem item sm={12} md={6} lg={4} key={index}>
                        <StyledCardSkeleton animation='wave' variant='rounded'/>
                      </StyledGridItem>
                    ))
                }
                <StyledLastListItem
                  item
                  xs={12}
                  sx={{
                    visibility: isPaginatable ? 'visible' : 'hidden' 
                  }}
                >
                  {
                    !isPaginating && <ShowMoreButton onClick={handlePagination}/>
                  }
                </StyledLastListItem>
              </>
            )
          : <StyledPaymentSuccessText sx={{ width: '100%' }}>
              <ErrorIcon/> No cards found
            </StyledPaymentSuccessText>
        }
      </Grid>
    </StyledContainer>
  )
}

export default CardList