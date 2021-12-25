import React, { Fragment } from 'react'
import MobileMenu from '../ui/MobileMenu/MobileMenu'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Layout(props) {
  return (
    <>
      <Header />
      <main className="main">{props.children}</main>
      <MobileMenu />
      {/* <Footer /> */}
    </>
  )
}

export default Layout
