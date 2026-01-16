import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/navbar'

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="p-4">
        <Outlet />
      </main>

      {/* Footer ค่อยทำทีหลัง */}
    </>
  )
}

export default MainLayout
