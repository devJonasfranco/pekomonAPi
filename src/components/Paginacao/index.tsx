import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { ContainerPaginacao, NumeroPaginasContainer } from './style'
import { useContext, useState } from 'react'
import { PaginacaoContext } from '../../context/contextPaginacao'

// Componente
export function Paginacao() {
  // Context
  const { setPagina, pagina } = useContext(PaginacaoContext)
  // State
  const [cont, setCont] = useState(1)

  // 01
  function addPagina() {
    setPagina(pagina + 12)
    setCont(cont + 1)
  }
  // 02
  function subPagina() {
    if (pagina > 12) {
      setPagina(pagina - 12)
      setCont(cont - 1)
    } else {
      setPagina(0)
      setCont(1)
    }
  }

  // 03
  function renderPageNumber() {
    const pageNumbers = [cont - 1, cont, cont + 1].filter(
      (number) => number > 0,
    )

    return pageNumbers.map((number) => (
      <NumeroPaginasContainer key={number} $variante={number === cont}>
        {number}
      </NumeroPaginasContainer>
    ))
  }

  console.log(cont)
  // ______________
  return (
    <ContainerPaginacao>
      <button onClick={() => subPagina()} disabled={pagina === 0}>
        <CaretLeft size={28} />
      </button>
      <span>{renderPageNumber()}</span>
      <button onClick={() => addPagina()}>
        <CaretRight size={28} />
      </button>
    </ContainerPaginacao>
  )
}
