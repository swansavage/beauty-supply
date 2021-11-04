import React, { useState } from 'react'
import BSLogo from './BSLogo'
import {
  Grommet,
  Box,
  Collapsible,
  Button,
  Heading,
  Layer,
  ResponsiveContext,
} from 'grommet'

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="neutral-1"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    style={{ zIndex: '1' }}
    {...props}
  />
)

const Navbar = props => {
  const [showSidebar, setShowSidebar] = useState(false)
  console.log(props)
  return (
    <AppBar justify="start">
      <BSLogo />
      <Heading level="2" margin="none" color="neutral-2" size="small">
        Beauty Supply
      </Heading>
    </AppBar>
  )
}

export default Navbar
