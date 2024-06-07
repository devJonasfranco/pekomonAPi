import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { PageListaPokemon } from './page/ListPokemon'
import { PaginacaoContextProvider } from './context/contextPaginacao'

export function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <PaginacaoContextProvider>
          <GlobalStyle />
          <PageListaPokemon />
        </PaginacaoContextProvider>
      </ThemeProvider>
    </div>
  )
}
