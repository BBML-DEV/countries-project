import { CoutriesDataProps } from '../../../../../pages/Home'
import { SelectContainer } from './styled'

type OptionsProps = {
  options: CoutriesDataProps[]
  setOptionValue: React.Dispatch<React.SetStateAction<string>>
}

export const Select = ({ options, setOptionValue }: OptionsProps) => {
  function handleGetValue({ target }: any) {
    setOptionValue(target.value)
  }

  return (
    <SelectContainer>
      <select name="select" onChange={handleGetValue}>
        <option selected>Filter by Region</option>
        {options.map((option) => (
          <option key={option.id} value={option.region}>
            {option.region}
          </option>
        ))}
      </select>
    </SelectContainer>
  )
}
