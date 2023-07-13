import { CoutriesDataProps } from '../../../pages/Home'
import { Card } from './components/Card'
import { ListContainer } from './styled'

type DataPros = {
  data: CoutriesDataProps[]
}
export const List = ({ data }: DataPros) => {
  return (
    <ListContainer className="container">
      {data.map((data) => {
        return <Card key={data.id} data={data} />
      })}
    </ListContainer>
  )
}
