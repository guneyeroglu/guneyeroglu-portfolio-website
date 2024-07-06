import { FC } from 'react';

import ProjectCard from '@components/ProjectCard';
import ProjectDrawer from '@components/ProjectDrawer';
import { myProjects } from '@global/constants';
import { IMyProject } from '@global/interfaces';

const ProjectsPage: FC = () => {
  return (
    <div className='flex flex-col justify-start items-start'>
      <span className='text-3xl text-neutral-200 ml-12 max-lg:ml-8 max-sm:text-xl'>
        A few
        <span className='text-warning-700'>{` projects `}</span>
        that i developed...
      </span>
      <ul className='w-full flex flex-row flex-wrap gap-y-12 mt-12 max-lg:mt-8 max-sm:mt-2 max-md:gap-y-8 max-xs:gap-y-4'>
        {myProjects.map((project: IMyProject) => (
          <ProjectCard
            key={`${project.id}-${project.title}`}
            id={project.id}
            label={project.title}
            logo={project.image}
          />
        ))}
      </ul>
      <ProjectDrawer />
    </div>
  );
};

export default ProjectsPage;
