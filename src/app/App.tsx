import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './shared/styles/global'
import { defaultTheme } from './shared/styles/theme/defaultTheme'
import { Home } from './pages/Home'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
