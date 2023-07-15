import { CoutriesDataProps } from '../../../../../pages/Home'
import { SelectContainer } from './styled'

type OptionsProps = {
  options: CoutriesDataProps[]
  value: string
  setValue: (value: string) => void
}

export const Select = ({ options, value, setValue }: OptionsProps) => {
  function handleGetValue({ target }: any) {
    setValue(target.value)
  }

  console.log(value)

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
