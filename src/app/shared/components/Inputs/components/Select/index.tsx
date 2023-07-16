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
        <option value="africa">Africa</option>
        <option value="asia">Ásia</option>
        <option value="americas">Americas</option>
        <option value="europa">Europa</option>
        <option value="oceania">Oceania</option>
      </select>
    </SelectContainer>
  )
}
