import { FC } from 'react';

import ProjectCard from '@components/ProjectCard';
import ProjectDrawer from '@components/ProjectDrawer';
import { myProjects } from '@global/constants';
import { IMyProject } from '@global/interfaces';

const ProjectsPage: FC = () => {
  return (
    <div className='flex flex-col justify-start items-start p-16 max-lg:p-8 max-sm:p-2'>
      <span className='text-3xl text-neutral-200 ml-12 max-lg:ml-8 max-sm:text-xl'>
        A few
        <span className='text-warning-700'>{` projects `}</span>
        that i developed...
      </span>
      <ul className='w-full flex flex-row flex-wrap gap-y-12 my-12 max-lg:my-8 max-sm:my-2'>
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
