import { InputTextContainer } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useCountries } from '../../../../hook/useCountries'

export const Input = () => {
  const getInputTextValue = ({ target }: { target: HTMLInputElement }) => {
    setInputValue(target.value)
  }

  const { inputValue, setInputValue } = useCountries()

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
