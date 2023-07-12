import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./shared/styles/global"
import { defaultTheme } from './shared/styles/theme/defaultTheme'

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
      <h1>Teste fonte e cores</h1>
      <GlobalStyles />
    </ThemeProvider>
 

    </>
  )
}

export default App
