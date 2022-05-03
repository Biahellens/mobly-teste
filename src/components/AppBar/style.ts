//dependencies
import styled from 'styled-components'

//components
import { Box, BoxProps } from 'reflexbox'

export const AppBar = styled(Box)<BoxProps>`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  padding-top: 2em;

  max-width: 1366px;
`

export const TopBox = styled(Box)<BoxProps>`
  display: flex;

  padding-bottom: 20px;

  justify-content: center;
  align-items: center;

  width: 1366px;

`

export const LowBox = styled(Box)<BoxProps>`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  height: 60px;
  width: 1366px;

  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
`

export const Container = styled(Box)<BoxProps>`
  display: flex;

  align-items: center;

  width: 100%;

`
