import { HTMLAttributes } from 'react'

export type TextProps = {
  variant?: 'primary' | 'primaryBold' |'secondary' | 'title'  | 'input' | 'link'
} & HTMLAttributes<HTMLElement>
