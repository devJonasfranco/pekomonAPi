import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/Axios'

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
  weight: number
  height: number

  sprites: {
    front_default: string
  }
  types: type[]
}
interface PokemonModalType {
  nome: string
  front_default: string
}

// type 03
interface PaginacaoContext {
  pagina: number
  setPagina: (pagina: number) => void
  pokemon: PromiseType[]
  buscarPokemonPorNome: (nome: string) => Promise<void>
  pokemonModal: PokemonModalType | null
  setPokemonModal: (pokemon: PokemonModalType | null) => void
}
// type 04
interface PaginacaoContextProviderType {
  children: ReactNode
}

// Context
export const PaginacaoContext = createContext({} as PaginacaoContext)

// Função provider
export function PaginacaoContextProvider({
  children,
}: PaginacaoContextProviderType) {
  // 01
  const [pagina, setPagina] = useState(0)

  // 2
  const [pokemon, setPokemons] = useState<PromiseType[]>([])
  const [pokemonModal, setPokemonModal] = useState<PokemonModalType | null>(
    null,
  )

  // 03
  async function dadosPokemonApi() {
    // 03 Primeira parte da busca
    const primeiraBuscaNaApi = await api.get<PrimeiroBuscaApiType>(
      `/pokemon?limit=12&offset=${pagina}`,
    )
    const listaDeUrl = primeiraBuscaNaApi.data.results.map((state) => state.url)
    // 03 Segunda parte da query da API
    const promise = listaDeUrl.map((state) => api.get<PromiseType>(state))
    const dadosCompletosDosPokemons = await Promise.all(promise)
    const nomesDosPokemons = dadosCompletosDosPokemons.map(
      (state) => state.data,
    )

    setPokemons(nomesDosPokemons)
  }
  // 04
  async function buscarPokemonPorNome(nome: string) {
    try {
      const response = await api.get<PromiseType>(`/pokemon/${nome}`)
      setPokemons([response.data])
    } catch (erro) {
      console.error('erro ao buscar pokemon', erro)
    }
  }
  // 05
  useEffect(() => {
    dadosPokemonApi()
  }, [pagina])

  // -------------------
  return (
    <PaginacaoContext.Provider
      value={{
        pagina,
        setPagina,
        pokemon,
        buscarPokemonPorNome,
        pokemonModal,
        setPokemonModal,
      }}
    >
      {children}
    </PaginacaoContext.Provider>
  )
}
