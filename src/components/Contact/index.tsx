import { useDispatch } from 'react-redux'
import * as S from '@phosphor-icons/react'
import { ActionButton, TableCell } from './styles'
import ContactClass from '../../models/Contact'

import { remove } from '../../store/reducers/contacts'

type Props = ContactClass

const Contact = ({ fullName, category, email, phoneNumber, id }: Props) => {
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
        <ActionButton>
          <S.StarIcon size={16} />
        </ActionButton>
        <ActionButton>
          <S.PencilSimpleLineIcon size={16} />
        </ActionButton>
        <ActionButton onClick={() => dispatch(remove(id))}>
          <S.TrashIcon size={16} />
        </ActionButton>
      </TableCell>
    </tr>
  )
}

export default Contact
