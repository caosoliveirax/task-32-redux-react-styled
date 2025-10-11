import { useDispatch } from 'react-redux'
import * as S from '@phosphor-icons/react'
import { TableCell, FavoriteButton, DeleteButton } from './styles'
import { ActionButton } from '../../styles'
import ContactClass from '../../models/Contact'
import { remove, toggleFavorite } from '../../store/reducers/contacts'

type Props = ContactClass

const Contact = ({ fullName, category, email, phoneNumber, isFavorite, id }: Props) => {
  const dispatch = useDispatch()

  function renderIcon() {
    switch (category) {
      case 'Família':
        return <S.UsersFourIcon size={24} />
      case 'Amigos':
        return <S.UsersIcon size={24} />
      case 'Trabalho':
        return <S.BriefcaseIcon size={24} />
      case 'Favoritos':
        return <S.StarIcon size={24} />
    }
  }

  return (
    <tr>
      <TableCell>
        {renderIcon()}
        {fullName}
      </TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phoneNumber}</TableCell>
      <TableCell>
        <FavoriteButton $isFavorite={isFavorite} onClick={() => dispatch(toggleFavorite(id))}>
          {isFavorite ? <S.StarIcon weight="fill" size={16} /> : <S.StarIcon size={16} />}
        </FavoriteButton>
        <ActionButton>
          <S.PencilSimpleLineIcon size={16} />
        </ActionButton>
        <DeleteButton onClick={() => dispatch(remove(id))}>
          <S.TrashIcon size={16} />
        </DeleteButton>
      </TableCell>
    </tr>
  )
}

export default Contact
