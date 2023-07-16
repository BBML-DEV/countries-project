import { SelectContainer } from './styled'

type OptionsProps = {
  setOptionValue: React.Dispatch<React.SetStateAction<string>>
}

export const Select = ({ setOptionValue }: OptionsProps) => {
  function handleGetValue({ target }: any) {
    setOptionValue(target.value)
  }

  return (
    <SelectContainer>
      <select name="select" onChange={handleGetValue}>
        <option selected>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Ásia</option>
        <option value="Americas">Americas</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
      </select>
    </SelectContainer>
  )
}
