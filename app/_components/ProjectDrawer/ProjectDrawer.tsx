'use client';

import { FC } from 'react';
import { Button } from '@nextui-org/react';
import clsx from 'clsx';
import { ArrowSquareOut, X } from '@phosphor-icons/react';

import { TECHS } from '@global/enums';
import { myProjects, techs } from '@global/constants';
import { addZeroToId } from '@global/utils/functions';
import { IMyProject } from '@global/interfaces';
import { useProjectStore } from '@store';

const ProjectDrawer: FC = () => {
  const { projectId, setProjectId } = useProjectStore();

  const clearProjectId = (): void => setProjectId(null);

  const project: Undefinedable<IMyProject> = myProjects.find(
    (project: IMyProject) => project.id === projectId,
  );

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50'>
      <button
        className={clsx('fixed inset-0 bg-overlay cursor-default transition-all', {
          'opacity-100 pointer-events-auto': projectId,
          'opacity-0 pointer-events-none': !projectId,
        })}
        onClick={clearProjectId}
      />
      <div
        className={clsx(
          'fixed inset-0 left-auto w-[500px] bg-neutral-800 transition-all max-md:w-full',
          {
            'translate-x-0': projectId,
            'translate-x-full': !projectId,
          },
        )}
      >
        {project && (
          <div className='w-full h-full'>
            <div className='flex items-center justify-end p-4'>
              <Button isIconOnly variant='solid' color='danger' onClick={clearProjectId}>
                <X className='text-neutral-200' size={20} weight='bold' />
              </Button>
            </div>
            <span className='block text-neutral-200 text-xl border-b-1.5 border-b-divider p-4'>
              {addZeroToId(project.id)}
            </span>
            <a
              className='inline-flex justify-start items-center p-4 gap-2 text-neutral-200 hover:text-warning-700/hover'
              href={project.details.links.website}
              target='_blank'
            >
              <h2 className='text-current text-2xl max-sm:text-xl'>{project.title}</h2>
            </a>
            <p className='text-neutral-400 px-4'>{project.details.description}</p>
            <div className='flex flex-col px-4 mt-4 pt-4 border-t-1.5 border-t-divider'>
              <div className='flex flex-col justify-center items-start gap-4'>
                {project.details.techs.map((tech: keyof typeof TECHS) => {
                  const _tech = techs[tech];
                  const Logo: FC = _tech.logo;
                  const label: string = _tech.label;

                  return (
                    <div key={label} className='flex justify-start items-center gap-4'>
                      <div className='flex justify-center items-center border-1 border-divider bg-neutral-200 rounded'>
                        <Logo />
                      </div>
                      <span>{label}</span>
                    </div>
                  );
                })}
              </div>
              <a
                className='flex-1 flex justify-center items-center gap-2 mt-12'
                href={project.details.links.website}
                target='_blank'
              >
                <span>Visit</span>
                <ArrowSquareOut size={28} color='currentColor' />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDrawer;
