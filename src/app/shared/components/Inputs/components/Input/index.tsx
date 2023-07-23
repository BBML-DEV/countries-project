import { InputTextContainer } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useCoutries } from '../../../../hook/useCoutries'

export const Input = () => {
  const getInputTextValue = ({ target }: any) => {
    setInputValue(target.value)
  }

  const { inputValue, setInputValue } = useCoutries()

  return (
    <InputTextContainer>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        type="text"
        placeholder="Search for a country..."
        value={inputValue}
        onChange={getInputTextValue}
      />
    </InputTextContainer>
  )
}
