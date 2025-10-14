import { useState, type FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PlusIcon } from '@phosphor-icons/react'
import { categories, type Category } from '@utils/Contact'
import { add } from '../../store/reducers/contacts'
import { Input, MainContainer, SaveButton } from '../../styles'
import { FormContainer, MaskedInput, Option, Options, TitleForm } from './styles'
import Contact from '../../models/Contact'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState<Category>('Família')

  const addContactHandler = (event: FormEvent) => {
    event.preventDefault()

    const addContact = new Contact(fullName, category, email, phoneNumber, 0)
    dispatch(add(addContact))
    navigate('/')
  }

  return (
    <MainContainer>
      <TitleForm>Novo contato</TitleForm>
      <FormContainer onSubmit={addContactHandler}>
        <Input
          onChange={({ target }) => setFullName(target.value)}
          value={fullName}
          name="name"
          type="text"
          placeholder="Nome"
          required
        />
        <MaskedInput
          onAccept={(value) => setPhoneNumber(value)}
          value={phoneNumber}
          type="tel"
          placeholder="Telefone celular"
          mask="(00) 00000-0000"
          name="phone"
          required
        />
        <Input
          onChange={({ target }) => setEmail(target.value)}
          value={email}
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <Options>
          <p>Categorias</p>
          {categories.map((cat) => (
            <Option key={cat}>
              <input
                onChange={({ target }) => setCategory(target.value as Category)}
                type="radio"
                value={cat}
                name="cat"
                id={cat}
                checked={category === cat}
              />
              <label htmlFor={cat}>{cat}</label>
            </Option>
          ))}
        </Options>
        <SaveButton type="submit">
          <PlusIcon weight="bold" size={80} />
        </SaveButton>
      </FormContainer>
    </MainContainer>
  )
}

export default Form
