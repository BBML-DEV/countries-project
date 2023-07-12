import { SelectContainer } from './styled'

export const Select = () => {
  return (
    <SelectContainer>
      <select name="select">
        <option selected>Filter by Region</option>
        <option value="valor1">Valor 1</option>
        <option value="valor2">Valor 2</option>
        <option value="valor3">Valor 3</option>
        <option value="valor1">Valor 1</option>
        <option value="valor2">Valor 2</option>
        <option value="valor3">Valor 3</option>
      </select>
    </SelectContainer>
  )
}
