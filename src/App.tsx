import Sidebar from './containers/Sidebar'
import ContactList from './containers/ContactList'
import { Container, GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <ContactList />
      </Container>
    </>
  )
}

export default App
