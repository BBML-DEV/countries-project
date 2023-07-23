import { useCoutries } from '../../hook/useCoutries'
import { Card } from './components/Card'
import { ListContainer } from './styled'

enum ContinentOptions {
  Asia = 'Asia',
  Americas = 'Americas',
  Africa = 'Africa',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

const isOptionValid = (option: string): option is ContinentOptions => {
  return Object.values(ContinentOptions).includes(option as ContinentOptions)
}

export const List = () => {
  const { inputValue, data, optionValue } = useCoutries()

  const filterListOfRegions = data.filter((item) => item.region === optionValue)

  const inputFilter = data.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase()),
  )

  return (
    <ListContainer className="container">
      {inputValue.length > 0
        ? inputFilter.map((item) => <Card key={item.id} data={item} />)
        : isOptionValid(optionValue)
        ? filterListOfRegions.map((item) => <Card key={item.id} data={item} />)
        : data.map((item) => <Card key={item.id} data={item} />)}
    </ListContainer>
  )
}
