import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './shared/styles/global'
import { darkTheme, defaultTheme } from './shared/styles/theme/defaultTheme'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './shared/router'
import { CoutriesProvider } from './shared/Context'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoutriesProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Router />
        </BrowserRouter>
      </CoutriesProvider>
    </ThemeProvider>
  )
}

export default App
