import { ReactNode, createContext, useState } from 'react'
// type 01
interface PaginacaoContext {
  pagina: number
  setPagina: (pagina: number) => void
}
// type 02
interface PaginacaoContextProviderType {
  children: ReactNode
}

// Context
export const PaginacaoContext = createContext({} as PaginacaoContext)

// Provider
export function PaginacaoContextProvider({
  children,
}: PaginacaoContextProviderType) {
  // 01
  const [pagina, setPagina] = useState(0)

  return (
    <PaginacaoContext.Provider value={{ pagina, setPagina }}>
      {children}
    </PaginacaoContext.Provider>
  )
}
