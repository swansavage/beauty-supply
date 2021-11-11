import React from 'react'
import Navbar from '../components/navbar.js'
import { Grommet, Box } from 'grommet'
import styled from 'styled-components'

const theme = {
  global: {
    font: {
      family: 'proxima-nova, sans-serif',
      size: '18px',
      height: '40px',
      color: '#00473e',
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
  return (
    <Wrapper>
      <Grommet theme={theme} full="min">
        <Box fill>
          <Navbar></Navbar>
          <Box direction="row" flex>
            {children}
          </Box>
        </Box>
      </Grommet>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 1152px;
  max-width: 100%;
  margin: 0 auto;
  background-color: #f2f7f5;
`

export default Layout
