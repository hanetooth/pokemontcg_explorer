
import variables from '@/styles/_variables.module.scss'
import { Card, styled } from '@mui/material'

export default styled(Card)`
  margin: auto 0 23.37px 0;
  padding: 0 24px;

  width: 294px;
  height: 204px;

  position: relative;
  overflow: visible;

  border-radius: 20px;
  background: ${variables.mainBg};

  box-shadow: ${variables.boxShadow};

  & .MuiGrid-container,
  & .MuiGrid-item {
    background-color: transparent;
  }
`