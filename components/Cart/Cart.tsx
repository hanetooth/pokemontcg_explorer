'use client'

import React, { useEffect } from 'react'
import { StyledBlock, StyledGrid } from '@/components/shared/'
import { SelectedCardsContext } from '@/contexts'
import { CartIcon, SuccessIcon } from '@/icons'
import { Close as CloseIcon } from '@mui/icons-material'
import { Collapse, Grid, Slide, Zoom } from '@mui/material'
import { useContext, useState } from 'react'
import {
  StyledBadge,
  StyledClearAllButton,
  StyledCloseCartButton,
  StyledContainer,
  StyledDialog,
  StyledDialogAction,
  StyledDialogActionGradientBlock,
  StyledPayNowButton,
  StyledSelectedCardsContainer,
  StyledShowCartButton,
  StyledTotalAmountLabel,
  StyledTotalAmountText,
  StyledTotalPriceLabel,
  StyledTotalPriceText,
  StyledSuccessDialog,
  StyledPaymentSuccessText,
} from './StyledComponents'
import SelectedCard from './SelectedCard/SelectedCard'
import { TransitionGroup } from 'react-transition-group'
import { TransitionProps } from '@mui/material/transitions'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SuccessTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Zoom ref={ref} {...props} />;
});

export default function Cart() {
  const { selectedCards, setSelectedCards } = useContext(SelectedCardsContext)
  const [openDialog, setOpenDialog] = useState(false)
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false)
  const [openPaymentScuccessDialog, setOpenPaymentScuccessDialog] = useState(false)
  const [ shouldAnimateNow, setShouldAnimateNow ] = useState(false)

  const selectedCardsAmount = selectedCards.size
  let totalQuantity = 0
  let totalPrice = 0

  if (!selectedCardsAmount && openDialog) setOpenDialog(false)

  useEffect(() => {
    setShouldAnimateNow(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Dialogs handlers start
  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleOnPayNow = () => {
    setOpenDialog(false)
    setIsPaymentSuccess(true)
  }

  const handleClosePaymentScuccessialog = () => {
    setOpenPaymentScuccessDialog(false)
  }
  // Dialogs handlers end

  const handleOnClearAll = () => {
    setOpenDialog(false)
    setSelectedCards(new Map())
  }

  useEffect(() => {
    if (!openDialog && isPaymentSuccess) {
      setTimeout(() => {
        setSelectedCards(new Map())
        setOpenPaymentScuccessDialog(true)
        setIsPaymentSuccess(false)
      }, 500)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ openDialog, isPaymentSuccess ])

  const selectedCardComponents: React.ReactNode[] = [];

  const onQuantityIncrease = (id: string) => {
    setSelectedCards((prevSelectedCards) => {
      let selectedCard = prevSelectedCards.get(id)
      if (Number(selectedCard?.stockLeft) < 1) return prevSelectedCards

      const newSelectedCards = new Map(prevSelectedCards)
      selectedCard = newSelectedCards.get(id)
      if (selectedCard) {
        selectedCard.quantity += 1
        selectedCard.stockLeft -= 1
        newSelectedCards.set(id, selectedCard)
      }
      return newSelectedCards
    })
  }

  const onQuantityDecrease = (id: string) => {
    setSelectedCards((prevSelectedCards) => {
      let selectedCard = prevSelectedCards.get(id)

      const newSelectedCards = new Map(prevSelectedCards)
      selectedCard = newSelectedCards.get(id)
      if (selectedCard) {
        if (selectedCard.quantity <= 1) {
          newSelectedCards.delete(id)
          return newSelectedCards
        }
        selectedCard.quantity -= 1
        selectedCard.stockLeft += 1
        newSelectedCards.set(id, selectedCard)
      }
      return newSelectedCards
    })
  }

  selectedCards.forEach((card, id) => {
    totalQuantity += card.quantity
    totalPrice += card.price * card.quantity

    selectedCardComponents.push(
      <Collapse key={id}>
        <Grid item xs={12} sx={{ maxHeight: '132.739px' }}>
          <SelectedCard
            id={id}
            pokemonCard={card}
            onQuantityIncrease={onQuantityIncrease}
            onQuantityDecrease={onQuantityDecrease}/>
        </Grid>
      </Collapse>
    )
  })

  return (
    <StyledContainer>
      <StyledDialog
        open={openDialog}
        TransitionComponent={Transition}
      >
        
        <StyledSelectedCardsContainer container className="hide-scrollbar">
          <TransitionGroup>
            { selectedCardComponents }
          </TransitionGroup>
        </StyledSelectedCardsContainer>

        <StyledDialogAction>

          <StyledDialogActionGradientBlock/>

          <StyledBlock
            sx={{
              textAlign: 'center',
              padding: '0 20px 19px 20px'
            }}
          >
            <StyledClearAllButton
              onClick={handleOnClearAll}
              sx={{
                visibility: selectedCardsAmount ? 'visible' : 'hidden'
              }}
            >
              Clear all
            </StyledClearAllButton>
          </StyledBlock>

          <StyledGrid container sx={{ marginTop: '7px' }}>
            <StyledGrid item xs={6}>
              <StyledTotalAmountLabel>Total cards</StyledTotalAmountLabel>
            </StyledGrid>
            <StyledGrid item xs={6}>
              <StyledTotalAmountText>{totalQuantity}</StyledTotalAmountText>
            </StyledGrid>
            <StyledGrid item xs={6}>
              <StyledTotalPriceLabel>Total price</StyledTotalPriceLabel>
            </StyledGrid>
            <StyledGrid item xs={6}>
              <StyledTotalPriceText>${totalPrice.toFixed(2)}</StyledTotalPriceText>
            </StyledGrid>
          </StyledGrid>

          <StyledGrid container sx={{ paddingTop: '26px' }}>
            <StyledGrid item xs={12} sx={{ textAlign: 'center' }}>
              <StyledPayNowButton variant="contained" onClick={handleOnPayNow}>Pay now</StyledPayNowButton>
            </StyledGrid>
          </StyledGrid>

        </StyledDialogAction>

        <StyledCloseCartButton variant="contained" onClick={handleCloseDialog}>
          <CloseIcon sx={{ fontSize: '16px' }} />
        </StyledCloseCartButton>

      </StyledDialog>

      <StyledBadge
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        badgeContent={selectedCardsAmount}
        invisible={!selectedCardsAmount}
      >
        <Zoom in={shouldAnimateNow}>
          <StyledShowCartButton
            variant='contained'
            startIcon={ <CartIcon /> }
            onClick={handleOpenDialog}
          >
            Show Cart
          </StyledShowCartButton>
        </Zoom>
      </StyledBadge>

      <StyledSuccessDialog
        open={ openPaymentScuccessDialog }
        TransitionComponent={ SuccessTransition }
      >
        <StyledGrid container>
          <Zoom timeout={1000} in={openPaymentScuccessDialog && shouldAnimateNow}>
            <StyledGrid item xs={12} sx={{ marginTop: '99px', textAlign: 'center' }}>
              <SuccessIcon />
            </StyledGrid>
          </Zoom>
          <StyledGrid item xs={12}>
            <StyledPaymentSuccessText>Payment success!</StyledPaymentSuccessText>
          </StyledGrid>
        </StyledGrid>

        <StyledCloseCartButton variant="contained" onClick={handleClosePaymentScuccessialog}>
          <CloseIcon sx={{ fontSize: '16px' }} />
        </StyledCloseCartButton>
      </StyledSuccessDialog>

    </StyledContainer>
  )
}