import { CoutriesDataProps } from '../../../../../pages/Home'
import { SelectContainer } from './styled'

type OptionsProps = {
  options: CoutriesDataProps[]
}

export const Select = ({ options }: OptionsProps) => {
  return (
    <SelectContainer>
      <select name="select">
        <option selected>Filter by Region</option>
        {options.map((option) => (
          <option key={option.id}>{option.region}</option>
        ))}
      </select>
    </SelectContainer>
  )
}
