
import React from 'react'
import { AppRouter } from './router/AppRouter'
import { Navbar } from './ui/components/Navbar'

export const TangerineApp = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  )
}


export default TangerineApp
