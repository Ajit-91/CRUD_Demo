import { Container } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <Container maxWidth='xl' sx={({ palette: { custom } }) => ({
      backgroundColor: custom.background.main,
      flexGrow: 1,
      py: 5,
    })}>
      <Container sx={{width : '100%', height : 'fit-content'}}>
        <Navbar />
        {children}
      </Container>
    </Container>
  )
}

export default Layout