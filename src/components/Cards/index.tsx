import { useContext, useEffect, useState } from 'react'
import { api } from '../../lib/Axios'
import { ContainerCards } from './style'
import { PaginacaoContext } from '../../context/contextPaginacao'
// type 01
interface PrimeiroBuscaApiType {
  results: [
    {
      name: string
      url: string
    },
  ]
}
// type 02
interface PromiseType {
  name: string
  sprites: {
    front_default: string
  }
}

// Componente
export function CardsPokemon() {
  const { pagina } = useContext(PaginacaoContext)

  // State
  const [pokemon, setPokemons] = useState<PromiseType[]>([])

  // 01
  async function dadosPokemonApi() {
    const primeiraBuscaNaApi = await api.get<PrimeiroBuscaApiType>(
      `/pokemon?limit=12&offset=${pagina}`,
    )
    const listaDeUrl = primeiraBuscaNaApi.data.results.map((state) => state.url)

    const promise = listaDeUrl.map((state) => api.get<PromiseType>(state))
    const dadosCompletosDosPokemons = await Promise.all(promise)
    const nomesDosPokemons = dadosCompletosDosPokemons.map(
      (state) => state.data,
    )

    setPokemons(nomesDosPokemons)
  }
  // 02
  useEffect(() => {
    dadosPokemonApi()
  }, [pagina])

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
