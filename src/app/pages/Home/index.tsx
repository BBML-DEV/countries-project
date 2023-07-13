import { Header } from '../../shared/styles/components/Header'
import { Inputs } from '../../shared/styles/components/Inputs'
import { List } from '../../shared/styles/components/List'
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
