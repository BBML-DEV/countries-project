import { CoutriesDataProps } from '../../../pages/Home'
import { Card } from './components/Card'
import { ListContainer } from './styled'

type DataPros = {
  data: CoutriesDataProps[]
  optionValue: string
}

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

export const List = ({ data, optionValue }: DataPros) => {
  const filterListOfRegions = data.filter((item) => item.region === optionValue)

  return (
    <ListContainer className="container">
      {isOptionValid(optionValue)
        ? filterListOfRegions.map((item) => <Card key={item.id} data={item} />)
        : data.map((item) => <Card key={item.id} data={item} />)}
    </ListContainer>
  )
}
