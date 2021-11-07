import React, { useEffect, createRef } from 'react'
import lottie from 'lottie-web'
import animation from './hero-color-1.json'
import { Troubleshoot } from 'grommet-icons'

const HeroAnimation = () => {
  let animationContainer = createRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
      renderer: 'svg',
      loop: false,
      autoplay: Troubleshoot,
    })
    return () => anim.destroy()
  })

  return <div ref={animationContainer}></div>
}

export default HeroAnimation
