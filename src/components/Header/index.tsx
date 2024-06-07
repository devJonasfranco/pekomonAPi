import { MagnifyingGlass } from '@phosphor-icons/react'
import { HeaderContainer, SearchPokemon } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <SearchPokemon>
        <input type="text" placeholder="Pesquisar Pokemon" />
        <MagnifyingGlass size={24} />
      </SearchPokemon>
    </HeaderContainer>
  )
}
