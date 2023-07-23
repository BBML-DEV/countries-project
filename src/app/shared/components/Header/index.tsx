import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeaderContainer, HeaderContent } from './styled'
import { useCoutries } from '../../hook/useCoutries'

export const Header = () => {
  const { isDarkTheme, setIsDarkTheme } = useCoutries()

  function handleChangeTheme() {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <HeaderContainer>
      <HeaderContent className="container">
        <h1>Where in the world?</h1>

        <button onClick={handleChangeTheme}>
          <FontAwesomeIcon icon={faMoon} />
          <span>Dark Mode</span>
        </button>
      </HeaderContent>
    </HeaderContainer>
  )
}
