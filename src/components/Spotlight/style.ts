//dependencies
import styled from 'styled-components'

//components
import { Box, BoxProps } from 'reflexbox'

import destaque from '../../assets/imgs/spotlight/Destaque.jpg'

export const BoxMain = styled.div`
  position: relative;
  display: flex;

  height: 480px;
  width: 1366px;
`
export const BoxImage = styled(Box)<BoxProps>`
  display: block;
  margin-left: auto;
  margin-right: auto;

  background-image: url(${destaque});
  background-repeat: no-repeat;
  background-position: center;

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

  padding-left: 8em;


`
