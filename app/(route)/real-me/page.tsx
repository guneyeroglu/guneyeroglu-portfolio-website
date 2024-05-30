import { FC } from 'react';
import clsx from 'clsx';

import MeCard from '@components/MeCard';
import { IMeCard } from '@global/interfaces';

import { meCards } from './config';

const RealMePage: FC = () => {
  return (
    <div className='w-full max-w-screen-md m-auto mt-16 mb-16 flex flex-col justify-start items-center gap-12'>
      {meCards.map((meCard: IMeCard, index: number) => (
        <div
          key={meCard.label}
          className={clsx('w-full flex items-center', {
            'justify-start': index % 2 === 0,
            'justify-end': index % 2 !== 0,
          })}
        >
          <MeCard label={meCard.label} contents={meCard.contents} />
        </div>
      ))}
    </div>
  );
};

export default RealMePage;
