import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'secondaryMini' | 'cart' | 'dark'
} & ButtonHTMLAttributes<HTMLButtonElement>
