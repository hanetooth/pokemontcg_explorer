'use client'

import { StyledCardSkeleton } from '@/components/shared'
import { StyledGridContainer, StyledGridItem } from './StyledComponents'

export default function Loading() {
  const cards = Array.from(Array(6).keys())
  return (
    <StyledGridContainer container rowSpacing='80px'>
      {
        cards.map((key) => (
          <StyledGridItem item sm={12} md={6} lg={4} key={key}>
            <StyledCardSkeleton animation="wave" variant="rounded"/>
          </StyledGridItem>
        ))
      }
    </StyledGridContainer>
  )
}