'use client';

import { FC, Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tooltip } from '@nextui-org/react';
import { FileArrowDown, Icon } from '@phosphor-icons/react';
import clsx from 'clsx';

import { routes } from '@global/constants';
import { URLS } from '@global/enums';
import { IColorClsx, IRoute } from '@global/interfaces';

const Sidebar: FC = () => {
  const pathname: URLS = usePathname() as URLS;

  const color: IColorClsx = {
    'hover:text-purple-700/hover': pathname === URLS.HOME,
    'hover:text-neutral-500/hover': pathname === URLS.ABOUT,
    'hover:text-danger-700/hover': pathname === URLS.REAL_ME,
    'hover:text-warning-700/hover': pathname === URLS.PROJECTS,
    'hover:text-success-700/hover': pathname === URLS.BLOG,
  };

  const handleTooltipColor = () => {
    switch (pathname) {
      case URLS.HOME:
        return 'bg-purple-700';
      case URLS.ABOUT:
        return 'bg-neutral-700';
      case URLS.REAL_ME:
        return 'bg-danger-700';
      case URLS.PROJECTS:
        return 'bg-warning-700';
      case URLS.BLOG:
        return 'bg-success-700';
      default:
        return 'bg-neutral-700';
    }
  };

  const handleDownloadResume = (): void => {};

  return (
    <aside className='fixed top-[calc(1rem_+_56px)] bottom-[calc(1rem_+_56px)] left-4 max-w-14 w-full flex flex-col justify-center items-center border-1 border-divider border-t-0 border-b-0'>
      <div className='relative flex flex-col justify-center items-center gap-2'>
        {routes.map((route: IRoute) => {
          if (route.pathname === URLS.REAL_ME && pathname !== URLS.REAL_ME) {
            return <Fragment key={route.pathname}></Fragment>;
          }

          const Icon: Icon = route.icon;
          const isCurrentPath: boolean = pathname === route.pathname;

          return (
            <Link
              key={route.pathname}
              href={route.pathname}
              target='_self'
              className={clsx('text-neutral-200', {
                'text-neutral-200/disabled': !isCurrentPath,
                'absolute -bottom-10': route.pathname === URLS.REAL_ME && pathname === URLS.REAL_ME,
                ...color,
              })}
            >
              <Tooltip
                className={handleTooltipColor()}
                placement='right'
                content={`<${route.title} />`}
              >
                <div className='flex justify-center items-center'>
                  <Icon size={32} fill='currentColor' weight={isCurrentPath ? 'fill' : 'regular'} />
                </div>
              </Tooltip>
            </Link>
          );
        })}
      </div>
      <Tooltip className={handleTooltipColor()} placement='right' content='Download CV'>
        <a
          className='absolute bottom-4 text-neutral-200/disabled cursor-pointer'
          href='/resume.pdf'
          download='Guney_Eroglu_CV.pdf'
        >
          <FileArrowDown
            size={32}
            className={clsx({
              ...color,
            })}
            onClick={handleDownloadResume}
          />
        </a>
      </Tooltip>
    </aside>
  );
};

export default Sidebar;
