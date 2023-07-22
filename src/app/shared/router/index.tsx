import { Routes, Route } from 'react-router-dom'
import { Home } from '../../pages/Home'
import { DefaultLayout } from '../../layout/defaultLayout'
import { SingleCard } from '../../pages/SingleCard'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/singleCard" element={<SingleCard />} />
      </Route>
    </Routes>
  )
}
