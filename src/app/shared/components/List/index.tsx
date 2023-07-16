import { CoutriesDataProps } from '../../../pages/Home'
import { Card } from './components/Card'
import { ListContainer } from './styled'

type DataPros = {
  data: CoutriesDataProps[]
  optionValue: string
}
export const List = ({ data, optionValue }: DataPros) => {
  const filterListOfRegions = data.filter((item) => item.region === optionValue)

  console.log(filterListOfRegions)

  return (
    <ListContainer className="container">
      {optionValue.length > 0
        ? filterListOfRegions.map((item) => {
            return <Card key={item.id} data={item} />
          })
        : data.map((item) => {
            return <Card key={item.id} data={item} />
          })}
    </ListContainer>
  )
}
