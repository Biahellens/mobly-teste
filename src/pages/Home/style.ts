// dependencies
import styled from 'styled-components'

// componentes
import { Flex, Box } from 'reflexbox'

// interfaces
import { BoxProps } from 'reflexbox'

export const Wrapper = styled(Flex)`
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`

export const Container = styled(Box)<BoxProps>`
  position: relative;
`
