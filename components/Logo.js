const Logo = ({ logo }) => {
  return (
    <a
      href={logo.url}
      target='_blank'
      className='col-span-1 flex justify-center py-8 px-8 bg-gray-100 h-40 logos'
    >
      {logo.files[1] ? (
        <img
          className='logo cursor-pointer hidden'
          src={`/logos/logos/${logo.files[1]}`}
          alt={logo.name}
        />
      ) : (
        <img
          className='logo cursor-pointer hidden'
          src={`/logos/logos/${logo.files[0]}`}
          alt={logo.name}
        />
      )}
    </a>
  );
};

export default Logo;
