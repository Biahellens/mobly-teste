//dependencies
import styled from 'styled-components'

//components
import { Box, BoxProps } from 'reflexbox'

import destaque from '../../assets/imgs/spotlight/Destaque.jpg'

export const BoxMain = styled.div`
  position: relative;
  display: flex;

  width: 1366px;
  background-color: #edece6;
`

export const Container = styled(Box)<BoxProps>`
  display: flex;
  flex-wrap: wrap;

  align-items: stretch;
`

export const CardImages = styled(Box)<BoxProps>`
  display: flex;

  padding: 6em 7.2em ;
`

export const ContainerImg = styled(Box)<BoxProps>`
  position: relative;

  cursor: pointer;
  transition: all ease-in 0.5s;

  margin: 0;


  &:hover {
    border: 2px solid #e0e7e0;

  }
`
