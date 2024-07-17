import Logo from '../components/Logo';

const Logos = ({ logos }) => {
  return (
    <div className='lg:max-w-5xl xl:max-w-7xl mx-auto px-4 md:px-0 no-scrollbar'>
      <main className='flex flex-col items-center justify-center w-full flex-1 px-20'>
        <div className='mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8'>
          {logos.map((logo) => (
            <Logo key={logo.files[0]} logo={logo} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Logos;
