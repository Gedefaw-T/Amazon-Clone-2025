import React from 'react'
import Header from '../Header/Header'

function Layout({children}) {
  return (
    <>
    {/* passing header to children components using props */}
      <Header/>
      {children}
    </>
  )
}

export default Layout
