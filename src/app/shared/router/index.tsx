import { Routes, Route } from 'react-router-dom'
import { Home } from '../../pages/Home'
import { DefaultLayout } from '../../layout/defaultLayout'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/post/:number" element={<Post />} /> */}
      </Route>
    </Routes>
  )
}
