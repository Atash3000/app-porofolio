import React, { Fragment } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Layout(props) {
  return (
    <main className="main">
      <Header />
      {props.children}
      <Footer />
    </main>
  )
}

export default Layout
