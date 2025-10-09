import * as S from '@phosphor-icons/react'
import { MainContainer, Title } from '../../styles'
import { ContactsTable, Input, ActionButton, TableCell, TableHeaderCell } from './styles'

const ContactList = () => {
  return (
    <MainContainer>
      <Title>Agenda de Contatos</Title>
      <Input id="search" name="search" type="text" placeholder="Buscar contato" />
      <ContactsTable>
        <thead>
          <tr>
            <TableHeaderCell>Nome</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>N° de celular</TableHeaderCell>
            <TableHeaderCell>Ações</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>
              <S.UsersFourIcon size={24} />
              Monkey D. Luffy
            </TableCell>
            <TableCell>eu@gmail.com</TableCell>
            <TableCell>(11) 91235-5321</TableCell>
            <TableCell>
              <ActionButton>
                <S.StarIcon size={16} />
              </ActionButton>
              <ActionButton>
                <S.PencilSimpleLineIcon size={16} />
              </ActionButton>
              <ActionButton>
                <S.TrashIcon size={16} />
              </ActionButton>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <S.StarIcon size={24} />
              Sanji Vinsmoke
            </TableCell>
            <TableCell>mrprince3@gmail.com</TableCell>
            <TableCell>(11) 97559-4934</TableCell>
            <TableCell>
              <ActionButton>
                <S.StarIcon size={16} />
              </ActionButton>
              <ActionButton>
                <S.PencilSimpleLineIcon size={16} />
              </ActionButton>
              <ActionButton>
                <S.TrashIcon size={16} />
              </ActionButton>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <S.BriefcaseIcon size={24} />
              William Shakespeare
            </TableCell>
            <TableCell>shakeshake@gmail.com</TableCell>
            <TableCell>(11) 91855-7854</TableCell>
            <TableCell>
              <ActionButton>
                <S.StarIcon size={16} />
              </ActionButton>
              <ActionButton>
                <S.PencilSimpleLineIcon size={16} />
              </ActionButton>
              <ActionButton>
                <S.TrashIcon size={16} />
              </ActionButton>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <S.UsersIcon size={24} />
              Amélie Poulain
            </TableCell>
            <TableCell>fitgirl2000@gmail.com</TableCell>
            <TableCell>(11) 91285-4458</TableCell>
            <TableCell>
              <ActionButton>
                <S.StarIcon size={16} />
              </ActionButton>
              <ActionButton>
                <S.PencilSimpleLineIcon size={16} />
              </ActionButton>
              <ActionButton>
                <S.TrashIcon size={16} />
              </ActionButton>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <S.BriefcaseIcon size={24} />
              Jon Snow
            </TableCell>
            <TableCell>northking@gmail.com</TableCell>
            <TableCell>(11) 91111-1111</TableCell>
            <TableCell>
              <ActionButton>
                <S.StarIcon size={16} />
              </ActionButton>
              <ActionButton>
                <S.PencilSimpleLineIcon size={16} />
              </ActionButton>
              <ActionButton>
                <S.TrashIcon size={16} />
              </ActionButton>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <S.UsersIcon size={24} />
              Alan Ferreira
            </TableCell>
            <TableCell>nextageX@gmail.com</TableCell>
            <TableCell>(11) 94323-4721</TableCell>
            <TableCell>
              <ActionButton>
                <S.StarIcon size={16} />
              </ActionButton>
              <ActionButton>
                <S.PencilSimpleLineIcon size={16} />
              </ActionButton>
              <ActionButton>
                <S.TrashIcon size={16} />
              </ActionButton>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <S.UsersIcon size={24} />
              Rony Weasley
            </TableCell>
            <TableCell>ronron@gmail.com</TableCell>
            <TableCell>(11) 94877-3355</TableCell>
            <TableCell>
              <ActionButton>
                <S.StarIcon size={16} />
              </ActionButton>
              <ActionButton>
                <S.PencilSimpleLineIcon size={16} />
              </ActionButton>
              <ActionButton>
                <S.TrashIcon size={16} />
              </ActionButton>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <S.UsersFourIcon size={24} />
              Milton Nascimento
            </TableCell>
            <TableCell>miltonmbp@gmail.com</TableCell>
            <TableCell>(11) 97885-1388</TableCell>
            <TableCell>
              <ActionButton>
                <S.StarIcon size={16} />
              </ActionButton>
              <ActionButton>
                <S.PencilSimpleLineIcon size={16} />
              </ActionButton>
              <ActionButton>
                <S.TrashIcon size={16} />
              </ActionButton>
            </TableCell>
          </tr>
          <tr>
            <TableCell>
              <S.StarIcon size={24} />
              Lô Borges
            </TableCell>
            <TableCell>loborgesmbp@gmail.com</TableCell>
            <TableCell>(11) 91111-1111</TableCell>
            <TableCell>
              <ActionButton>
                <S.StarIcon size={16} />
              </ActionButton>
              <ActionButton>
                <S.PencilSimpleLineIcon size={16} />
              </ActionButton>
              <ActionButton>
                <S.TrashIcon size={16} />
              </ActionButton>
            </TableCell>
          </tr>
        </tbody>
      </ContactsTable>
    </MainContainer>
  )
}

export default ContactList
