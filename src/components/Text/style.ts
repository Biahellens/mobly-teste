import styled from 'styled-components'
import { typography, variant } from 'styled-system'

import { TextProps } from './interface'

const variants = {
  prop: 'variant',
  variants: {
    primary: {
      fontSize: '14px',
    },

    primaryBold: {
      fontSize: '18px',
      fontWeight: '400'
    },

    secondary: {
      fontSize: '18px',
      color: '#5f22a8',
      fontWeight: '560'
    },

    title: {
      fontSize: '24px',
      color: '#ff4600',
      fontWeight: 'bold',
    },

    input: {
      fontSize: '14px',
      color: '#414141',
      fontWeight: '200',

    },

    link: {
      fontSize: '14px',
      color: '#e9f7df',
      fontWeight: '700',
    }
  }
}



export const TextStyled = styled('text')<TextProps>({
  margin: '2px',
},
variant(variants), typography)
