import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeaderContainer, HeaderContent } from './styled'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent className="container">
        <h1>Where in the world?</h1>

        <button>
          <FontAwesomeIcon icon={faMoon} />
          <span>Dark Mode</span>
        </button>
      </HeaderContent>
    </HeaderContainer>
  )
}
