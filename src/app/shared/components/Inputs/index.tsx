import { CoutriesDataProps } from '../../../pages/Home'
import { Input } from './components/Input'
import { Select } from './components/Select'
import { InputsContainer } from './styled'

type InputsProps = {
  data: CoutriesDataProps[]
  optionValue: string
  setOptionValue: (value: string) => void
  inputValue: string
  setInputValue: (value: string) => void
}

export const Inputs = ({
  data,
  setOptionValue,
  inputValue,
  setInputValue,
}: InputsProps) => {
  return (
    <InputsContainer className="container">
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <Select options={data} setOptionValue={setOptionValue} />
    </InputsContainer>
  )
}
