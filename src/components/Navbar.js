import React from 'react'
import BSLogo from './BSLogo'
import { Box, Heading, Button } from 'grommet'
import styled from 'styled-components'
const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    background="neutral-1"
    pad="medium"
    style={{ zIndex: '1' }}
    {...props}
  />
)

const Navbar = props => {
  console.log(props)
  return (
    <Wrapper>
      <AppBar>
        <Box direction="row">
          <BSLogo />
          <Heading level="2" margin="none" color="neutral-2" size="small">
            Beauty Supply
          </Heading>
        </Box>
        <Box direction="row" style={{ marginLeft: 'auto' }}>
          <Button className="nav-toggles" plain label="Our services" />
          <Button
            className="nav-toggles"
            plain
            label="Get in touch"
            margin={{ left: 'medium' }}
          />
        </Box>
      </AppBar>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 1152px;
  max-width: 100%;
  margin: 0 auto;
  background-color: #f2f7f5;

  .nav-toggles {
    color: #00473e;
    font-weight: 700;
  }
`

export default Navbar
