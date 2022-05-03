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

    cart: {
      bg: '#5f22a8',

      minWidth: '80px',
      minHeight: '40px',

      borderColor: '#5f22a8',
      borderRadius: '4px',

      justifyContent: 'space-around',
    },

    secondary: {
      bg: '#FFF',
      border: 'none',

      width: '230px',
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

    },

    dark: {
      bg: '#007693',

      Width: '100px',
      minHeight: '30px',

      borderColor: '#007693',
      borderRadius: '4px',

      justifyContent: 'center',
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

  '&:hover': {
    background: "#8846d8",
  },
},
variant(variants))
