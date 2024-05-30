import { FC } from 'react';
import clsx from 'clsx';

import MeCard from '@components/MeCard';
import { IContent } from '@global/interfaces';
import { calculateAge } from '@global/utils/functions';

interface ICard {
  label: string;
  contents: IContent[];
}

const HomePage: FC = () => {
  const contentsMe: IContent[] = [
    {
      title: 'Name',
      description: 'Güney Eroğlu',
    },
    {
      title: 'Age',
      description: String(calculateAge(new Date('1995-10-17'))),
    },
    {
      title: 'Job',
      description: 'Software Developer',
    },
    {
      title: 'E-mail',
      description: 'benguneyeroglu@gmail.com',
    },
  ];

  const contentsExperience: IContent[] = [
    {
      title: 'Jul 2023 - Now',
      description: 'Front-End Developer',
    },
    {
      title: 'Jun 2022 - Jul 2023',
      description: 'Front-End Assistant Developer',
    },
  ];

  const contentsEducation: IContent[] = [
    {
      title: 'Uludağ Üniversitesi',
      description: 'Feb 2020',
    },
  ];

  const cards: ICard[] = [
    {
      label: 'Me',
      contents: contentsMe,
    },
    {
      label: 'Work Experience',
      contents: contentsExperience,
    },
    {
      label: 'Educations',
      contents: contentsEducation,
    },
  ];

  return (
    <div className='w-full max-w-screen-md h-full m-auto mt-16 flex flex-col justify-start items-center gap-4'>
      {cards.map((card: ICard, index: number) => (
        <div
          key={card.label}
          className={clsx('w-full flex items-center', {
            'justify-start': index % 2 === 0,
            'justify-end': index % 2 !== 0,
          })}
        >
          <MeCard header={card.label} contents={card.contents} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
