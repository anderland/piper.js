// shuffle_array function
function shuffle_array(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Index_Next component
import { useState, useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import Layout from '../components/Layout';
import Logos from '../components/Logos';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const algorithms = [
  { id: 'max_width', name: 'Max Width' },
  { id: 'precise_dimensions', name: 'Precise Dimensions' },
];

const append_logos = [
  {
    name: 'append_1',
    shortname: 'append_1',
    url: '#',
    files: ['devoir.svg'],
    path: '/img/',
  },
  {
    name: 'append_2',
    shortname: 'append_2',
    url: '#',
    files: ['globe.svg'],
    path: '/img/',
  },
  {
    name: 'append_3',
    shortname: 'append_3',
    url: '#',
    files: ['star.svg'],
    path: '/img/',
  },
];

const Index_Next = ({ logos }) => {
  const [algorithm, setAlgorithm] = useState('max_width');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithms[0]);

  const handler = (e) => {
    var images = document.querySelectorAll('.logos .logo');

    const max_img_width = (image) => {
      var ideal_area = 5000;
      var ideal_ratio = Math.sqrt(
        ideal_area / (image.naturalWidth * image.naturalHeight)
      );

      image.width = Math.round(image.naturalWidth * ideal_ratio);
      image.classList.remove('hidden');
    };

    const precise_dimensions = (img_width, img_height, ideal_area) => {
      const aspect_ratio = img_width / img_height;
      const ideal_width = Math.sqrt(ideal_area * aspect_ratio);
      const ideal_height = ideal_width / aspect_ratio;

      const width_options = [Math.floor(ideal_width), Math.ceil(ideal_width)];
      const height_options = [
        Math.floor(ideal_height),
        Math.ceil(ideal_height),
      ];

      let best_fit = { width: 0, height: 0, area_diff: Infinity };

      width_options.forEach((w) => {
        height_options.forEach((h) => {
          const area_diff = Math.abs(w * h - ideal_area);
          if (area_diff < best_fit.area_diff) {
            best_fit = { width: w, height: h, area_diff };
          }
        });
      });

      return best_fit;
    };

    const precise_dimensions_handler = (image) => {
      const ideal_area = 5000;
      const original_width = image.naturalWidth;
      const original_height = image.naturalHeight;

      if (original_width > 0 && original_height > 0) {
        const { width: precise_width, height: precise_height } =
          precise_dimensions(original_width, original_height, ideal_area);

        image.width = precise_width;
        image.height = precise_height;
        image.classList.remove('hidden');
      }
    };

    if (algorithm === 'max_width') {
      images.forEach(max_img_width);
    } else if (algorithm === 'precise_dimensions') {
      images.forEach(precise_dimensions_handler);
    }
  };

  useEffect(() => {
    const handleLoad = () => {
      handler();
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, [algorithm]);

  useEffect(() => {
    setAlgorithm(selectedAlgorithm.id);
  }, [selectedAlgorithm]);

  return (
    <Layout>
      <div className='max-w-xl mx-auto mt-8'>
        <label
          htmlFor='algorithm'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Select Algorithm
        </label>
        <Listbox value={selectedAlgorithm} onChange={setSelectedAlgorithm}>
          <div className='relative mt-2'>
            <ListboxButton className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'>
              <span className='block truncate'>{selectedAlgorithm.name}</span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <ChevronUpDownIcon
                  aria-hidden='true'
                  className='h-5 w-5 text-gray-400'
                />
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm'
            >
              {algorithms.map((algorithm) => (
                <ListboxOption
                  key={algorithm.id}
                  value={algorithm}
                  className='group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 outline-none data-[focus]:text-white'
                >
                  <span className='block truncate font-normal group-data-[selected]:font-semibold'>
                    {algorithm.name}
                  </span>
                  <span className='absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden'>
                    <CheckIcon aria-hidden='true' className='h-5 w-5' />
                  </span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>

      {/* <Selector /> */}
      <Logos logos={logos} shuffle={false} />
    </Layout>
  );
};

export async function getStaticProps() {
  const logosPath = path.join(process.cwd(), 'public/logos/logos.json');
  const logosJson = fs.readFileSync(logosPath, 'utf-8');
  const logos = JSON.parse(logosJson);

  // Shuffle the existing logos
  const shuffled_logos = shuffle_array(logos);

  // Combine the appended logos with the shuffled existing logos
  const combined_logos = append_logos.concat(shuffled_logos);

  return {
    props: {
      logos: combined_logos,
    },
  };
}

export default Index_Next;
