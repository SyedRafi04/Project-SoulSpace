import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const RootLayOut = () => {
  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default RootLayOut
