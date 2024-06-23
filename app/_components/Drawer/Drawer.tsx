'use client';

import { FC } from 'react';
import clsx from 'clsx';

import { useProjectStore } from '@store';
import { myProjects } from '@global/constants';
import { IMyProject } from '@global/interfaces';
import { Button } from '@nextui-org/react';
import { X } from '@phosphor-icons/react';

const Drawer: FC = () => {
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
        className={clsx('fixed inset-0 top-auto w-full bg-neutral-800 transition-all', {
          'h-3/4 max-lg:h-full': projectId,
          'h-0': !projectId,
        })}
      >
        {project && (
          <div className='w-full h-full p-4'>
            <div className='flex items-center justify-end'>
              <Button isIconOnly variant='solid' color='danger' onClick={clearProjectId}>
                <X className='text-neutral-200' size={20} weight='bold' />
              </Button>
            </div>
            <div className='w-full h-full flex items-center justify-center'>
              <a href={project.details.link} target='_blank'>
                <span className='text-neutral-200 text-3xl max-lg:text-xl max-sm:text-base'>
                  Explore{' '}
                  <span className='text-neutral-400 hover:text-warning-700/hover'>
                    {project.title}
                  </span>
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
