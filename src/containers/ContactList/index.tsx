import { MainContainer, Title } from '../../styles'
import { ContactsTable, Input, TableHeaderCell } from './styles'
import contacts from '../../data/contacts'
import Contact from '../../components/Contact'

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
