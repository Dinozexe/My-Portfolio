import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Experience from '../pages/Experience'
import TechStack from '../pages/TechStack'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/TechStack" element={<TechStack />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
