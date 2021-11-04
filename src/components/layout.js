import React from 'react'
import Navbar from '../components/Navbar'
import { Grommet, Box } from 'grommet'

const theme = {
  global: {
    font: {
      family: 'proxima-nova, sans-serif',
      size: '18px',
      height: '20px',
    },
    colors: {
      brand: '#faae2b',
      'accent-1': '#ffa8ba',
      'accent-2': '#fa5246',
      'neutral-1': '#f2f7f5',
      'neutral-2': '#00473e',
      'neutral-3': '#475d5b',
    },
  },
}

const Layout = ({ children }) => {
  console.log(children)
  return (
    <>
      <Grommet theme={theme} full>
        <Box fill>
          <Navbar></Navbar>
          <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
            {children}
          </Box>
        </Box>
      </Grommet>
    </>
  )
}

export default Layout
