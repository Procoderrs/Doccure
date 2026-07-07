import { Outlet } from 'react-router-dom'
import TopHeader from './TopHeader'
import Bottom_Header from './Bottom_Header'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <>
      <TopHeader />
      <Bottom_Header />
      <Outlet />
      <Footer />
    </>
  )
}