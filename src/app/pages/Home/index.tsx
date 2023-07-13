import { Header } from '../../shared/components/Header'
import { Inputs } from '../../shared/components/Inputs'
import { List } from '../../shared/components/List'
import { HomeContainer } from './styled'

export const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Inputs />
      <List />
    </HomeContainer>
  )
}
