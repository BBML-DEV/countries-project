import { useCoutries } from '../../../../hook/useCoutries'
import { SelectContainer } from './styled'

export const Select = () => {
  const { setOptionValue } = useCoutries()

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
