import React, { Fragment } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Layout(props) {
  return (
    <Fragment>  
      <Header />
      <main className="main">{props.children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
