import Link from 'next/link';
import { useEffect } from 'react';

const Logo = ({ logo }) => {
  const handler = (e) => {
    var images = document.querySelectorAll('.logos .logo');

    function max_img_width(image) {
      var ideal_area = 5000;
      var ideal_ratio = Math.sqrt(
        ideal_area / (image.naturalWidth * image.naturalHeight)
      );

      image.width = Math.round(image.naturalWidth * ideal_ratio);
      image.classList.remove('hidden');
    }

    images.forEach(max_img_width);
  };

  useEffect(() => {
    if (document.readyState === 'complete') {
      handler();
    } else {
      window.addEventListener('load', handler);
      return () => document.removeEventListener('load', handler);
    }
  }, []);

  return (
    <Link key={logo.files[0]} href={`/${logo.url}`}>
      <div className='col-span-1 flex justify-center py-8 px-8 bg-gray-100 h-40 logos logos--config-dynamic'>
        {logo.files[1] ? (
          <img
            className='hidden logo cursor-pointer '
            src={`/logos/logos/${logo.files[1]}`}
            alt={logo.name}
          />
        ) : (
          <img
            className='hidden logo cursor-pointer '
            src={`/logos/logos/${logo.files[0]}`}
            alt={logo.name}
          />
        )}
      </div>
    </Link>
  );
};

export default Logo;
