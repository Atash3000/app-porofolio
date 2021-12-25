import Typewriter from 'typewriter-effect'
import React from 'react'

function TypeEffect() {
  return (
    <div className="type">

    <Typewriter
      options={{
        strings: ['front end dev', 'full stack'],
        autoStart: true,
        loop: true,
        wrapperClassName:'Typewriter__wrapper',
      }}
      />
      </div>
  )
}

export default TypeEffect
