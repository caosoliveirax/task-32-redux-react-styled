import { useDispatch, useSelector } from 'react-redux'
import { MainContainer, Title } from '../../styles'
import { ContactsTable, Input, TableHeaderCell } from './styles'
import type { RootReducer } from '../../store'
import Contact from '../../components/Contact'
import { changeTerm } from '../../store/reducers/filter'

const ContactList = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { category, term } = useSelector((state: RootReducer) => state.filter)

  const filterContacts = () => {
    let filteredContacts = itens

    if (category !== 'Todos') {
      filteredContacts = filteredContacts.filter((contact) => contact.category === category)
    }

    if (term && term.length > 0) {
      const termLowerCase = term.toLowerCase()
      const termDigitsOnly = term.replace(/\D/g, '')

      filteredContacts = filteredContacts.filter((contact) => {
        const nameAndEmailCheck =
          contact.fullName.toLowerCase().includes(termLowerCase) ||
          contact.email.toLowerCase().includes(termLowerCase)

        if (termDigitsOnly.length > 0) {
          const phoneCheck = contact.phoneNumber.replace(/\D/g, '').includes(termDigitsOnly)

          return nameAndEmailCheck || phoneCheck
        }

        return nameAndEmailCheck
      })
    }

    return filteredContacts
  }

  const contacts = filterContacts()

  return (
    <MainContainer>
      <Title>Agenda de Contatos</Title>
      <Input
        value={term}
        onChange={(event) => dispatch(changeTerm(event.target.value))}
        id="search"
        name="search"
        type="text"
        placeholder="Buscar contato"
      />
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
              isFavorite={t.isFavorite}
              id={t.id}
            />
          ))}
        </tbody>
      </ContactsTable>
    </MainContainer>
  )
}

export default ContactList
