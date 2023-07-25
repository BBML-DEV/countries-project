import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './shared/styles/global'
import { darkTheme, defaultTheme } from './shared/styles/theme/defaultTheme'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './shared/router'
import { useCountries } from './shared/hook/useCountries'

function App() {
  const { isDarkTheme } = useCountries()

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
