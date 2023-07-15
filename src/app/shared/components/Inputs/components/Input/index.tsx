import { InputTextContainer } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

type TextInputProps = {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

export const Input = ({ inputValue, setInputValue }: TextInputProps) => {
  const getInputTextValue = ({ target }: any) => {
    setInputValue(target.value)
  }

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
