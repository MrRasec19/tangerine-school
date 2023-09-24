
import React from 'react'
import { AppRouter } from './router/AppRouter'
import { Footer, Navbar } from './ui/index'

export const TangerineApp = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  )
}


export default TangerineApp
