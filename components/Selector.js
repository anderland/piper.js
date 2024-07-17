'use client';

import { useState } from 'react';
import { Radio, RadioGroup } from '@headlessui/react';

const algorithms = [
  { name: 'Max Width', value: 'max_width' },
  { name: 'Precise Dimensions', value: 'precise_dimensions' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function AlgorithmSelector() {
  const [selected_algorithm, setSelectedAlgorithm] = useState(algorithms[0]);

  return (
    <div className='max-w-xl mx-auto mt-8'>
      {/* new selector that looks spiffy but does not work */}

      <fieldset aria-label='Algorithm selection'>
        <RadioGroup
          value={selected_algorithm}
          onChange={setSelectedAlgorithm}
          className='-space-y-px rounded-md bg-white'
        >
          {algorithms.map((algorithm, algorithmIdx) => (
            <Radio
              key={algorithm.value}
              value={algorithm}
              aria-label={algorithm.name}
              className={classNames(
                algorithmIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                algorithmIdx === algorithms.length - 1
                  ? 'rounded-bl-md rounded-br-md'
                  : '',
                'group relative flex cursor-pointer border border-gray-200 p-4 focus:outline-none data-[checked]:z-10 data-[checked]:border-indigo-200 data-[checked]:bg-indigo-50'
              )}
            >
              <span
                aria-hidden='true'
                className='mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white group-data-[checked]:border-transparent group-data-[checked]:bg-indigo-600 group-data-[focus]:ring-2 group-data-[focus]:ring-indigo-600 group-data-[focus]:ring-offset-2'
              >
                <span className='h-1.5 w-1.5 rounded-full bg-white' />
              </span>
              <span className='ml-3 flex flex-col'>
                <span className='block text-sm font-medium text-gray-900 group-data-[checked]:text-indigo-900'>
                  {algorithm.name}
                </span>
                {/* Placeholder for helper text */}
              </span>
            </Radio>
          ))}
        </RadioGroup>
      </fieldset>
    </div>
  );
}
