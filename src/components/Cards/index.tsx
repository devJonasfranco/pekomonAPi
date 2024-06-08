import { useContext } from 'react'

import { ContainerCards } from './style'
import { PaginacaoContext } from '../../context/contextPaginacao'

// Componente
export function CardsPokemon() {
  const { pokemon } = useContext(PaginacaoContext)

  return (
    <ContainerCards>
      {pokemon.map((state, index) => (
        <button key={index}>
          <header>{state.name}</header>
          <img src={state.sprites.front_default} alt="" />
          <footer>
            <p>Tipo</p>
            <p>Peso</p>
            <p>Altura</p>
          </footer>
        </button>
      ))}
    </ContainerCards>
  )
}
