import { HTMLAttributes } from 'react'

export type TextProps = {
  variant?: 'primary' | 'primaryBold' |'secondary' | 'title' | 'titleBold' | 'input' | 'link' | 'span'
} & HTMLAttributes<HTMLElement>
