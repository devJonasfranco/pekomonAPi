import { Header } from '../../components/Header'
import { MainContainer } from './style'
import { CardsPokemon } from '../../components/Cards'
import { Paginacao } from '../../components/Paginacao'

export function PageListaPokemon() {
  return (
    <MainContainer>
      <Header />
      <CardsPokemon />
      <Paginacao />
    </MainContainer>
  )
}
