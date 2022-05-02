import styled from 'styled-components'
import css from '@styled-system/css';
import { variant } from 'styled-system'

import { InputProps } from './interface'

const variants = {
  prop: 'variant',
  variants: {
    primary: {
      width: '220px',
      minHeight: '40px',
      bg: '#e9f7df',
      color: 'black',
    },
  }
}

export const InputStyled = styled('input')<InputProps>(
  {
    fontSize: '14px',
    padding: 'm',

    borderColor: '#e9f7df',
    borderRadius: '2px',

    boxSizing: 'border-box',
		display: 'block',

    marginRight: '10px',

    '&:hover': {
      background: "#e0e7e0",
    },
  },
variant(variants))
