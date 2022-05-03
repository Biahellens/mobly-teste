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
export const BoxImage = styled(Box)<BoxProps>`
  display: block;

  background: url(${destaque}) no-repeat;

  width: 100%;
`

export const BoxText = styled(Box)<BoxProps>`
  display: flex;
  flex-wrap: wrap;

  justify-content: flex-start;
  align-items: center;

  width: 600px;
  padding: 2em 8em;

`

export const Container = styled(Box)<BoxProps>`
  display: flex;
  flex-wrap: wrap;

`

export const CardImages = styled(Box)<BoxProps>`
  display: flex;

  width: 82%;
  padding-left: 8em;
  justify-content: space-around;
`

export const ContainerImg = styled(Box)<BoxProps>`
  position: relative;

  cursor: pointer;
  transition: all ease-in 0.5s;


  &:hover {
    border: 2px solid #8846d8;

  }
`
