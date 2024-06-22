import { useContext } from 'react'

import { ContainerCards } from './style'
import { PaginacaoContext } from '../../context/contextPaginacao'
import * as Dialog from '@radix-ui/react-dialog'
import { ModalCard } from '../ModalCards'

// interface handleTypeSetpokemonModal {
//   name: string
//   front_default: string
// }
interface Stat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}
interface PromiseType {
  name: string
  sprites: {
    front_default: string
  }
  stats: Stat[]
}
// Componente
export function CardsPokemon() {
  const { pokemon, setPokemonModal } = useContext(PaginacaoContext)
  const handleAddsetPokemonModal = (pokemon: PromiseType) =>
    setPokemonModal({
      nome: pokemon.name,
      front_default: pokemon.sprites.front_default,
      stats: pokemon.stats,
    })

  return (
    <ContainerCards>
      {pokemon.map((state, index) => (
        <Dialog.Root key={index}>
          <Dialog.Trigger asChild>
            <button onClick={() => handleAddsetPokemonModal(state)}>
              <header>{state.name}</header>
              <img src={state.sprites.front_default} alt="" />
              <footer>
                <p>
                  <strong>Tipo:</strong>
                  {state.types.map((dados) => dados.type.name).join(', ')}
                </p>
                <p>
                  {' '}
                  <strong>Peso:</strong>
                  {state.weight}
                </p>
                <p>
                  {' '}
                  <strong>Altura:</strong> {state.height}
                </p>
              </footer>
            </button>
          </Dialog.Trigger>
          <ModalCard />
        </Dialog.Root>
      ))}
    </ContainerCards>
  )
}
