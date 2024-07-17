import Logo from '../components/Logo';

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Logos = ({ logos, shuffle = true }) => {
  const display_logos = shuffle ? shuffle(logos) : logos;

  return (
    <>
      {display_logos.map((logo) => (
        <Logo key={logo.files[0]} logo={logo} />
      ))}
    </>
  );
};

export default Logos;
