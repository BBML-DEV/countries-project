import { Header } from '../shared/components/Header'
import { Outlet } from 'react-router-dom'
import { DefaultLayoutContainer } from './styled'

export const DefaultLayout = () => {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  )
}
