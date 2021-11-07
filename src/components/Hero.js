import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text, Button } from 'grommet'
import HeroAnimation from '../assets/animations/HeroAnimation'

const Hero = () => {
  return (
    <Wrapper>
      <Box direction="row" justify="between">
        <Box animation={['slideRight', 'fadeIn']} className="left-box">
          <Box
            animation={{
              type: 'slideRight',
              delay: 0,
              duration: 1000,
              size: 'medium',
            }}
          >
            <Heading
              className="sub-header"
              color="neutral-2"
              level="5"
              size="xsmall"
              margin="none"
            >
              Web design & development for hire
            </Heading>
          </Box>
          <Box
            animation={{
              type: 'slideRight',
              delay: 100,
              duration: 1000,
              size: 'medium',
            }}
          >
            <Heading color="neutral-2" level="1" margin={{ bottom: 'large' }}>
              We build fast, modern websites.
            </Heading>
          </Box>
          <Box
            animation={{
              type: 'slideRight',
              delay: 200,
              duration: 1000,
              size: 'medium',
            }}
          >
            <Text
              color="neutral-2"
              className="hero-text "
              size="large"
              weight="400"
            >
              By leveraging the power of the Jamstack and server-side rendering
              techologies, we bring you{' '}
              <span className="bold">safe, secure, and performant</span>{' '}
              websites built with the latest innovative technologies and design.
            </Text>
          </Box>
          <Box
            direction="row"
            justify="start"
            animation={{
              type: 'slideRight',
              delay: 100,
              duration: 1000,
              size: 'large',
            }}
          >
            <Button className="btn" primary label="Get in touch"></Button>
            <Button className="btn" secondary label="What we do"></Button>
          </Box>
        </Box>

        <Box
          a11yTitle="an animation of a web developer at his computer"
          animation={{
            type: 'zoomIn',

            delay: 0,
            duration: 1000,
            size: 'large',
          }}
          className="hero-animation"
        >
          <HeroAnimation />
        </Box>
      </Box>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  padding: 0 3rem;

  .sub-header {
    text-transform: uppercase;
  }

  .left-box {
    margin: 3rem auto;

    width: 50%;
    height: 500px;

    .hero-text {
      font-size: 1.25rem;

      .bold {
        font-weight: bold;
        font-size: 1.35rem;
        color: #475d5b;
      }
    }
  }

  .btn {
    border-radius: 2px;
    margin-top: 3rem;
    height: 4.5rem;
    width: 45%;
    font-weight: 700;
    color: #00473e;

    &:nth-child(2) {
      margin-left: 1rem;
    }
  }

  .hero-animation {
    width: 100%;
    margin: -5rem -5rem 0 0;
  }
`

export default Hero
