import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as I from '@phosphor-icons/react'
import * as S from './styles'
import ContactClass from '../../models/Contact'
import { edit, remove, toggleFavorite } from '../../store/reducers/contacts'

type Props = ContactClass

const Contact = ({ fullName, category, email, phoneNumber, isFavorite, id }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [editFullName, setEditFullName] = useState(fullName)
  const [editEmail, setEditEmail] = useState(email)
  const [editPhoneNumber, setEditPhoneNumber] = useState(phoneNumber)

  useEffect(() => {
    setEditFullName(fullName)
    setEditEmail(email)
    setEditPhoneNumber(phoneNumber)
  }, [fullName, email, phoneNumber])

  const handleSave = () => {
    dispatch(
      edit({
        fullName: editFullName,
        email: editEmail,
        phoneNumber: editPhoneNumber,
        id,
        category,
        isFavorite
      })
    )
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditFullName(fullName)
    setEditEmail(email)
    setEditPhoneNumber(phoneNumber)
  }

  function renderIcon() {
    switch (category) {
      case 'Família':
        return <I.UsersFourIcon size={24} />
      case 'Amigos':
        return <I.UsersIcon size={24} />
      case 'Trabalho':
        return <I.BriefcaseIcon size={24} />
      case 'Favoritos':
        return <I.StarIcon size={24} />
    }
  }

  return (
    <tr>
      <S.TableCell>
        {renderIcon()}
        {isEditing ? (
          <S.InputCell
            type="text"
            value={editFullName}
            onChange={(e) => setEditFullName(e.target.value)}
          />
        ) : (
          fullName
        )}
      </S.TableCell>
      <S.TableCell>
        {isEditing ? (
          <S.InputCell
            type="email"
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
          />
        ) : (
          email
        )}
      </S.TableCell>
      <S.TableCell>
        {isEditing ? (
          <S.InputCell
            type="text"
            value={editPhoneNumber}
            onChange={(e) => setEditPhoneNumber(e.target.value)}
          />
        ) : (
          phoneNumber
        )}
      </S.TableCell>
      <S.TableCell>
        {isEditing ? (
          <>
            <S.SaveEditButton onClick={handleSave}>
              <I.CheckCircleIcon weight="fill" size={16} />
            </S.SaveEditButton>
            <S.CancelEditButton onClick={handleCancel}>
              <I.PencilSimpleSlashIcon weight="fill" size={16} />
            </S.CancelEditButton>
          </>
        ) : (
          <>
            <S.FavoriteButton $isFavorite={isFavorite} onClick={() => dispatch(toggleFavorite(id))}>
              {isFavorite ? <I.StarIcon weight="fill" size={16} /> : <I.StarIcon size={16} />}
            </S.FavoriteButton>
            <S.EditButton onClick={() => setIsEditing(true)}>
              <I.PencilSimpleLineIcon size={16} />
            </S.EditButton>
            <S.DeleteButton onClick={() => dispatch(remove(id))}>
              <I.TrashIcon size={16} />
            </S.DeleteButton>
          </>
        )}
      </S.TableCell>
    </tr>
  )
}

export default Contact
