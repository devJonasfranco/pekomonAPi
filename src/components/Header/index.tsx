import { MagnifyingGlass } from '@phosphor-icons/react'
import { HeaderContainer, SearchPokemon } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { PaginacaoContext } from '../../context/contextPaginacao'
// type 1
const schemaBusca = z.object({
  busca: z.string(),
})
// type 02
type schemaBuscaType = z.infer<typeof schemaBusca>

// Componente
export function Header() {
  // 01 UseForm
  const { register, handleSubmit, reset } = useForm<schemaBuscaType>({
    resolver: zodResolver(schemaBusca),
  })
  // 02 contexto
  const { buscarPokemonPorNome } = useContext(PaginacaoContext)

  // 03
  function handleBusca(dados: schemaBuscaType) {
    buscarPokemonPorNome(dados.busca)
    console.log(dados.busca)
    reset()
  }
  // --------------------
  return (
    <HeaderContainer>
      <form action="" onSubmit={handleSubmit(handleBusca)}>
        <SearchPokemon>
          <input
            type="text"
            placeholder="Pesquisar Pokemon"
            {...register('busca')}
          />
          <MagnifyingGlass size={24} />
        </SearchPokemon>
        {/* <button type="submit">Buscar</button> */}
      </form>
    </HeaderContainer>
  )
}
