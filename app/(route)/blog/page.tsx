import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <span className='text-7xl text-neutral-200'>
        Hi, I&rsquo;m <span className='text-success-700'>Güney</span>.
      </span>
      <span className='text-7xl text-neutral-200'>I&rsquo;m a Software Developer.</span>
      <p className='text-xl text-neutral-500 mt-4'>
        I develop Front-End and Back-End of Web and Mobile applications.
      </p>
    </div>
  );
};

export default HomePage;
