import { useNavigate } from 'react-router-dom'
import * as S from '@phosphor-icons/react'
import CardFilter from '@components/ContactFilter'
import { AsideBar, AddButton, Filter, BackButton } from './styles'

type Props = {
  showFilters: boolean
}

const Sidebar = ({ showFilters }: Props) => {
  const navigate = useNavigate()

  return (
    <AsideBar>
      {showFilters ? (
        <>
          <AddButton to="/new">
            Adicionar contato
            <S.PlusIcon weight="bold" size={44} />
          </AddButton>
          <Filter>
            <CardFilter category="Todos" icon={S.ListIcon} caption="Todos" />
            <CardFilter category="Família" icon={S.UsersFourIcon} caption="Família" />
            <CardFilter category="Amigos" icon={S.UsersIcon} caption="Amigos" />
            <CardFilter category="Trabalho" icon={S.BriefcaseIcon} caption="Trabalho" />
            <CardFilter category="Favoritos" icon={S.StarIcon} caption="Favoritos" />
          </Filter>
        </>
      ) : (
        <BackButton onClick={() => navigate('/')}>
          <S.ArrowArcLeftIcon weight="bold" size={44} />
        </BackButton>
      )}
    </AsideBar>
  )
}

export default Sidebar
