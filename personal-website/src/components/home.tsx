import Typewriter from 'typewriter-effect/dist/core';

export const Home = () => {
    return(
      <Typewriter
        options={{
          strings: ['Hello', 'World'],
          autoStart: true,
          loop: true,
        }}
      />
    )
} 