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
        <CardFilter category="Todos" icon={S.ListIcon} caption="Todos" />
        <CardFilter category="Família" icon={S.UsersFourIcon} caption="Família" />
        <CardFilter category="Amigos" icon={S.UsersIcon} caption="Amigos" />
        <CardFilter category="Trabalho" icon={S.BriefcaseIcon} caption="Trabalho" />
        <CardFilter category="Favoritos" icon={S.StarIcon} caption="Favoritos" />
      </Filter>
    </AsideBar>
  )
}

export default Sidebar
