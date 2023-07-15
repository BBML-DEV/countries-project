import { CoutriesDataProps } from '../../../pages/Home'
import { Card } from './components/Card'
import { ListContainer } from './styled'

type DataPros = {
  data: CoutriesDataProps[]
  optionValue: string
}
export const List = ({ data, optionValue }: DataPros) => {
  const teste =
    optionValue !== 'Filter by Region'
      ? data.filter((item) => item.region.includes(optionValue))
      : []

  console.log(teste)

  return (
    <ListContainer className="container">
      {data.map((data) => {
        return <Card key={data.id} data={data} />
      })}
    </ListContainer>
  )
}
