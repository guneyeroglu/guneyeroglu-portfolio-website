import { FC } from 'react';
import { StaticImageData } from 'next/image';
import clsx from 'clsx';

interface IProps {
  id: number;
  label: string;
  logo: StaticImageData;
}

const ProjectCard: FC<IProps> = ({ id, label, logo }) => {
  const addIdZero = (): string => {
    if (id <= 9) {
      return `0${id}`;
    } else {
      return `${id}`;
    }
  };

  return (
    <div
      className={clsx('flex justify-center items-center', {
        'basis-1/2': id % 3 !== 0 || id === 1 || id === 2,
        'basis-full': id % 3 === 0,
      })}
    >
      <button className='relative w-[500px] h-72 cursor-pointer text-neutral-200 transition-all hover:text-warning-700 hover:scale-105'>
        <div
          key={id}
          className='w-full h-full opacity-85 ml-8 rounded-lg brightness-50'
          style={{
            backgroundImage: `url(${logo.src})`,
            backgroundPosition: 'top left',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className='absolute bottom-4 left-0 max-w-28 text-left py-4 flex flex-col'>
          <span className='text-base text-current font-medium'>{label}</span>
          <span className='text- base text-current font-light border-t-1.5 border-t-current mt-2 pt-2'>
            {addIdZero()}
          </span>
        </div>
      </button>
    </div>
  );
};

export default ProjectCard;
