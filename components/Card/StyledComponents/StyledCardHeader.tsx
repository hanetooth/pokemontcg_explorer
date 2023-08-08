
import variables from '@/styles/_variables.module.scss'
import { CardHeader, styled } from '@mui/material'

export default styled(CardHeader)`
  margin-top: 74px;
  padding: 0px;
  overflow: hidden;

  & span {
    color: ${variables.mainText};
    font-family: Poppins;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`