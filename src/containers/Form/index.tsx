import { categories } from '@utils/Contact'
import { Input, MainContainer, SaveButton } from '../../styles'
import { FormContainer, Option, Options, TitleForm } from './styles'
import { PlusIcon } from '@phosphor-icons/react'

const Form = () => {
  return (
    <MainContainer>
      <TitleForm>Novo contato</TitleForm>
      <FormContainer>
        <Input name="name" required type="text" placeholder="Nome" />
        <Input name="phone" required type="tel" placeholder="Telefone celular" />
        <Input name="email" required type="email" placeholder="Email" />
        <Options>
          <p>Categorias</p>
          {Object.values(categories).map((category) => (
            <Option key={category}>
              <input
                type="radio"
                value={category}
                name="category"
                id="category"
                defaultChecked={category === 'Família'}
              />
              <label htmlFor={category}>{category}</label>
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
