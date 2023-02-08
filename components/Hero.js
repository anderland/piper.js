const Hero = () => {
  return (
    <div className='max-w-xl mx-auto mt-8'>
      <h1 className='text-2xl font-bold'>
        Area-based image sizing with JS and React
      </h1>

      <p className='mt-3 text-sm max-w-xl'>
        This is an effort to resize logos using JavaScript based on{' '}
        <a
          href='https://piperhaywood.com/images-consistent-surface-area/'
          className='text-emerald-500 hover:text-emerald-400'
        >
          Piper Haywoods
        </a>
        's formula. The superiority of this method compared to using a maximum
        width/maximum height approach is demonstrated in{' '}
        <a
          href='https://nicksherman.com/size-by-area/'
          className='text-emerald-500 hover:text-emerald-400'
        >
          Nick Sherman
        </a>
        's demo. The logos used in the demo were sourced from{' '}
        <a
          href='https://github.com/gilbarbara/logos'
          className='text-emerald-500 hover:text-emerald-400'
        >
          Gil Barbara
        </a>
        . I also considered the proportional image normalization formula
        presented in a{' '}
        <a
          href='https://codepen.io/danpaquette/pen/jXpbQK'
          className='text-emerald-500 hover:text-emerald-400'
        >
          Pen
        </a>{' '}
        by Dan Paquette, but found that Piper's formula was more suitable for
        logos with unique and irregular shapes.
      </p>

      <p className='mt-3 text-sm max-w-xl'>
        I am including both a JavaScript version and a React version using
        useState. Feel free to improve.
      </p>
    </div>
  );
};

export default Hero;
