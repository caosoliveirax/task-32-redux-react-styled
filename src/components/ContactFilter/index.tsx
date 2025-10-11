import type { RootReducer } from 'store'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import type { Icon } from '@phosphor-icons/react'
import { changeFilter } from '../../store/reducers/filter'
import type { Category } from '@utils/Contact'

export type Props = {
  caption: string
  icon: Icon
  category: Category | 'Todos'
}

const CardFilter = ({ caption, category, icon: Icon }: Props) => {
  const dispatch = useDispatch()
  const filter = useSelector((state: RootReducer) => state.filter)
  const contacts = useSelector((state: RootReducer) => state.contacts)

  const checkIsActive = () => {
    const sameCategory = filter.category === category

    return sameCategory
  }

  const contactCounter = () => {
    if (category === 'Todos') {
      return contacts.itens.length
    }
    if (category === 'Favoritos') {
      return contacts.itens.filter((contact) => contact.isFavorite).length
    }
    return contacts.itens.filter((contact) => contact.category === category).length
  }

  const toFilter = () => {
    dispatch(changeFilter({ category }))
  }

  const active = checkIsActive()
  const counter = contactCounter()

  return (
    <S.Card $active={active} onClick={toFilter}>
      <Icon size={24} />
      <S.Label>{caption}</S.Label>
      <S.Counter>{counter}</S.Counter>
    </S.Card>
  )
}

export default CardFilter
