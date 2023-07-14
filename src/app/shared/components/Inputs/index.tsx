import { Input } from './components/Input'
import { Select } from './components/Select'
import { InputsContainer } from './styled'

export const Inputs = ({ data }) => {
  return (
    <InputsContainer className="container">
      <Input />
      <Select options={data}/>
    </InputsContainer>
  )
}
