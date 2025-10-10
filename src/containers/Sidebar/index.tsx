import CardFilter from '@components/ContactFilter'
import { AsideBar, CardButton, Filter } from './styles'
import * as S from '@phosphor-icons/react'

const Sidebar = () => {
  return (
    <AsideBar>
      <CardButton>
        Adicionar contato
        <S.PlusIcon weight="bold" size={44} />
      </CardButton>
      <Filter>
        <CardFilter category="Todos" icon={S.ListIcon} counter={9} caption="Todos" />
        <CardFilter category="Família" icon={S.UsersFourIcon} counter={2} caption="Família" />
        <CardFilter category="Amigos" icon={S.UsersIcon} counter={3} caption="Amigos" />
        <CardFilter category="Trabalho" icon={S.BriefcaseIcon} counter={2} caption="Trabalho" />
        <CardFilter category="Favoritos" icon={S.StarIcon} counter={2} caption="Favoritos" />
      </Filter>
    </AsideBar>
  )
}

export default Sidebar
