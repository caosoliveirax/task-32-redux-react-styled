import type { RootReducer } from 'store'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import type { Icon } from '@phosphor-icons/react'
import { changeFilter } from '../../store/reducers/filter'
import type { Category } from '@utils/Contact'

export type Props = {
  caption: string
  counter: number
  icon: Icon
  category: Category | 'Todos'
}

const CardFilter = ({ caption, counter, category, icon: Icon }: Props) => {
  const dispatch = useDispatch()
  const filter = useSelector((state: RootReducer) => state.filter)

  const checkIsActive = () => {
    const sameCategory = filter.category === category

    return sameCategory
  }

  const toFilter = () => {
    dispatch(changeFilter({ category }))
  }

  const active = checkIsActive()

  return (
    <S.Card $active={active} onClick={toFilter}>
      <Icon size={24} />
      <S.Label>{caption}</S.Label>
      <S.Counter>{counter}</S.Counter>
    </S.Card>
  )
}

export default CardFilter
