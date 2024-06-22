import { FC } from 'react';

import ProjectCard from '@components/ProjectCard';
import { IMyProject } from '@global/interfaces';

import { myProjects } from './config';

const HomePage: FC = () => {
  return (
    <div className='flex flex-col justify-start items-start'>
      <span className='text-3xl text-neutral-200 ml-12 max-lg:ml-8 max-sm:text-xl'>
        A few
        <span className='text-warning-700'>{` projects `}</span>
        that i developed...
      </span>
      <div className='w-full flex flex-row flex-wrap gap-y-12 my-12 max-sm:my-4'>
        {myProjects.map((project: IMyProject, index: number) => (
          <ProjectCard
            key={project.title}
            id={index + 1}
            label={project.title}
            logo={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
