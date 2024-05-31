import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className='h-full flex flex-col justify-start items-start'>
      <span className='text-3xl text-neutral-200'>
        A few
        <span className='text-warning-700'>{` projects `}</span>
        that i developed...
      </span>
      <div></div>
    </div>
  );
};

export default HomePage;
