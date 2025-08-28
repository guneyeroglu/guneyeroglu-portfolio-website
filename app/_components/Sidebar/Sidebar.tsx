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
    'hover:text-success-700/hover': pathname === URLS.CONTACT,
  };

  const handleTooltipColor = (): string => {
    switch (pathname) {
      case URLS.HOME:
        return 'bg-purple-700';
      case URLS.ABOUT:
        return 'bg-neutral-700';
      case URLS.REAL_ME:
        return 'bg-danger-700';
      case URLS.PROJECTS:
        return 'bg-warning-700';
      case URLS.CONTACT:
        return 'bg-success-700';
      default:
        return 'bg-neutral-700';
    }
  };

  return (
    <aside className='sticky inset-0 ml-4 max-w-14 w-full flex flex-col justify-center items-center border-1 border-divider border-t-0 border-b-0'>
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
          href='/Guney_Eroglu_Resume.pdf'
          download='Guney_Eroglu_Resume.pdf'
        >
          <FileArrowDown
            size={32}
            className={clsx({
              ...color,
            })}
          />
        </a>
      </Tooltip>
    </aside>
  );
};

export default Sidebar;
