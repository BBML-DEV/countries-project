import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeaderContainer, HeaderContent } from './styled'
import { useState } from 'react'

export const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <HeaderContainer>
      <HeaderContent className="container">
        <h1>Where in the world?</h1>

        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
          <FontAwesomeIcon icon={faMoon} />
          <span>Dark Mode</span>
        </button>
      </HeaderContent>
    </HeaderContainer>
  )
}
