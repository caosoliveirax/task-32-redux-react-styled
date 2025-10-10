import { useSelector } from 'react-redux'
import { MainContainer, Title } from '../../styles'
import { ContactsTable, Input, TableHeaderCell } from './styles'
import type { RootReducer } from '../../store'
import Contact from '../../components/Contact'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { category } = useSelector((state: RootReducer) => state.filter)

  const filterContacts = () => {
    let filterContacts = itens

    if (category !== 'Todos') {
      filterContacts = filterContacts.filter((contact) => contact.category === category)
    }

    return filterContacts
  }

  const contacts = filterContacts()

  return (
    <MainContainer>
      <Title>Agenda de Contatos</Title>
      <Input id="search" name="search" type="text" placeholder="Buscar contato" />
      <ContactsTable>
        <thead>
          <tr>
            <TableHeaderCell style={{ width: '30%' }}>Nome</TableHeaderCell>
            <TableHeaderCell style={{ width: '30%' }}>Email</TableHeaderCell>
            <TableHeaderCell style={{ width: '25%' }}>N° de celular</TableHeaderCell>
            <TableHeaderCell style={{ width: '15%' }}>Ações</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {contacts.map((t) => (
            <Contact
              key={t.id}
              fullName={t.fullName}
              email={t.email}
              phoneNumber={t.phoneNumber}
              category={t.category}
              id={t.id}
            />
          ))}
        </tbody>
      </ContactsTable>
    </MainContainer>
  )
}

export default ContactList
