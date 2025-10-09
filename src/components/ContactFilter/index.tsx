import * as S from './styles'
import type { Icon } from '@phosphor-icons/react'

export type Props = {
  caption: string
  counter: number
  icon: Icon
  active?: boolean
}

const CardFilter = ({ caption, counter, icon: Icon, active }: Props) => {
  return (
    <S.Card active={active}>
      <Icon size={24} />
      <S.Label>{caption}</S.Label>
      <S.Counter>{counter}</S.Counter>
    </S.Card>
  )
}

export default CardFilter
