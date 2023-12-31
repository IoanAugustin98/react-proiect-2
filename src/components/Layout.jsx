import React from 'react'
import Header from './Header'
import Footer from './Footer'


function Layout(pros) {
  return (
    <div>
        <Header />
            { pros.children }
        <Footer />
    </div>
  )
}

export default Layout