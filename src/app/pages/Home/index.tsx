import { Inputs } from '../../shared/components/Inputs'
import { List } from '../../shared/components/List'
import { HomeContainer } from './styled'

export interface CoutriesDataProps {
  id: number
  name: string
  flag: string
  population: number
  region: string
  capital: string
}

export const Home = () => {
  return (
    <HomeContainer>
      <Inputs />
      <List />
    </HomeContainer>
  )
}
