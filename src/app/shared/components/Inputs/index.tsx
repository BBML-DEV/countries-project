import { CoutriesDataProps } from '../../../pages/Home'
import { Input } from './components/Input'
import { Select } from './components/Select'
import { InputsContainer } from './styled'

type InputsProps = {
  data: CoutriesDataProps[]
  optionValue: string
  setOptinValue: (value: string) => void
}

export const Inputs = ({ data, optionValue, setOptinValue }: InputsProps) => {
  return (
    <InputsContainer className="container">
      <Input />
      <Select options={data} value={optionValue} setValue={setOptinValue} />
    </InputsContainer>
  )
}
