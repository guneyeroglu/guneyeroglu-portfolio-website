import { FC } from 'react';

const HomePage: FC = () => {
  const color: string = 'purple';

  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <div className='blur-3xl bg-purple-700/40 w-[450px] h-[450px] rounded fixed left-20 bottom-20 -z-10' />
      <div className='blur-3xl bg-purple-700/40 w-[450px] h-[450px] rounded fixed right-32 top-32 -z-10' />
      <span className='text-7xl text-neutral-200'>
        Hi, I&rsquo;m <span className={`text-${color}-700 text-purple-700`}>Güney</span>.
      </span>
      <span className='text-7xl text-neutral-200'>I&rsquo;m a Software Developer.</span>
      <p className='text-xl text-neutral-500 mt-4'>
        I develop Front-End and Back-End of Web and Mobile applications.
      </p>
    </div>
  );
};

export default HomePage;
