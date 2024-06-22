import { FC } from 'react';
import Link from 'next/link';

import { URLS } from '@global/enums';

const HomePage: FC = () => {
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <span className='text-7xl text-neutral-200 mb-2 text-center max-lg:text-5xl max-sm:text-4xl'>
        Hi, I&rsquo;m{' '}
        <Link className='text-neutral-500 hover:text-purple-700' href={URLS.ABOUT}>
          Güney
        </Link>
        .
      </span>
      <span className='text-7xl masked-text text-center max-lg:text-5xl max-sm:text-4xl'>
        I&rsquo;m a Software Developer.
      </span>
      <p className='text-xl text-neutral-500 mt-4 text-center max-lg:text-base'>
        I develop Front-End and Back-End of web and mobile applications.
      </p>
    </div>
  );
};

export default HomePage;
