
import variables from '@/styles/_variables.module.scss'
import { CardMedia, styled } from '@mui/material'

export default styled('div')`
  width: 194.367px;
  height: 271.133px;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -75%);
  overflow: hidden;

  & img {
    width: 100%;
    height: auto;
  }
`