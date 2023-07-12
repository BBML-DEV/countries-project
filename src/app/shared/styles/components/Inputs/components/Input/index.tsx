import { InputTextContainer } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const Input = () => {
  return (
    <InputTextContainer>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" placeholder="Search for a country..." />
    </InputTextContainer>
  )
}
