import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeaderContainer, HeaderContent } from './styled'
import { useCountries } from '../../hook/useCountries'

export const Header = () => {
  const { isDarkTheme, setIsDarkTheme } = useCountries()

  function handleChangeTheme() {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <HeaderContainer>
      <HeaderContent className="container">
        <h1>Where in the world?</h1>

        {isDarkTheme ? (
          <button onClick={handleChangeTheme}>
            <FontAwesomeIcon icon={faSun} />
            <span>Light Mode</span>
          </button>
        ) : (
          <button onClick={handleChangeTheme}>
            <FontAwesomeIcon icon={faMoon} />
            <span>Dark Mode</span>
          </button>
        )}
      </HeaderContent>
    </HeaderContainer>
  )
}
