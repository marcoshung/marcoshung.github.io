import Typewriter from 'typewriter-effect';

export const TypeWriter = () => {
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