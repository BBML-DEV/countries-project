import { Inputs } from '../../shared/components/Inputs'
import { List } from '../../shared/components/List'
import { HomeContainer } from './styled'

export interface CountriesDataProps {
  id: number
  name: string
  flag: string
  population: number
  region: string
  capital: string
  alpha2Code: string
}

export const Home = () => {
  return (
    <HomeContainer>
      <Inputs />
      <List />
    </HomeContainer>
  )
}
