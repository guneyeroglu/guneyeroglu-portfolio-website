'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tooltip } from '@nextui-org/react';
import { Icon } from '@phosphor-icons/react';
import clsx from 'clsx';

import { routes } from '@global/constants';
import { URLS } from '@global/enums';
import { IColorClsx, IRoute } from '@global/interfaces';

const Sidebar: FC = () => {
  const pathname: URLS = usePathname() as URLS;

  const color: IColorClsx = {
    'hover:text-purple-700/hover': pathname === URLS.HOME,
    'hover:text-neutral-700/hover': pathname === URLS.ABOUT,
    'hover:text-warning-700/hover': pathname === URLS.PROJECTS,
    'hover:text-success-700/hover': pathname === URLS.BLOG,
  };

  const handleTooltipColor = () => {
    switch (pathname) {
      case URLS.HOME:
        return 'bg-purple-700';
      case URLS.ABOUT:
        return 'bg-neutral-700';
      case URLS.PROJECTS:
        return 'bg-warning-700';
      case URLS.BLOG:
        return 'bg-success-700';
      default:
        return 'bg-neutral-700';
    }
  };

  return (
    <aside className='max-w-14 w-full flex flex-col justify-center items-center gap-2 border-1 border-divider border-t-0 border-b-0'>
      {routes.map((route: IRoute) => {
        const Icon: Icon = route.icon;
        const isCurrentPath: boolean = pathname === route.pathname;

        return (
          <Link
            key={route.pathname}
            href={route.pathname}
            target='_self'
            className={clsx('text-neutral-200', {
              'text-neutral-200/disabled': !isCurrentPath,
              ...color,
            })}
          >
            <Tooltip
              className={handleTooltipColor()}
              placement='right'
              content={`<${route.title} />`}
            >
              <Icon size={32} color='currentColor' weight={isCurrentPath ? 'fill' : 'regular'} />
            </Tooltip>
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
