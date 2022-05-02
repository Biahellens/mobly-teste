import styled from 'styled-components'
import css from '@styled-system/css';
import { variant } from 'styled-system'

import { ButtonProps } from './interface'

const variants = {
  prop: 'variant',
  variants: {
    primary: {
      bg: '#5f22a8',

      minWidth: '60px',
      minHeight: '40px',

      borderColor: '#5f22a8',
      borderRadius: '4px',
    },

    secondary: {
      bg: '#FFF',
      border: 'none',

      maxWidth: '90px',
      padding: '2px',
      marginLeft: '14px',

      flexWrap: 'wrap',

    },

    secondaryMini: {
      bg: '#FFF',
      border: 'none',

      maxWidth: '60px',
      padding: '2px',
      marginLeft: '14px',

      flexWrap: 'wrap',

    }
  }
}

export const ButtonStyled = styled('button')<ButtonProps>({
    maxHeight: '60px',
    margin: '2px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
},
variant(variants))
