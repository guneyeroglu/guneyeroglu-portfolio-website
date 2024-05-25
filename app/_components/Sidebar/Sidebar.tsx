'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tooltip } from '@nextui-org/react';
import { Icon } from '@phosphor-icons/react';
import clsx from 'clsx';

import { routes } from '@global/constants';
import { URLS } from '@global/enums';
import { IRoute } from '@global/interfaces';

const Sidebar: FC = () => {
  const path: URLS = usePathname() as URLS;

  return (
    <aside className='max-w-14 w-full flex flex-col justify-center items-center gap-2 border-1 border-divider border-t-0 border-b-0'>
      {routes.map((route: IRoute) => {
        const Icon: Icon = route.icon;
        const isCurrentPath: boolean = path === route.path;

        return (
          <Link
            key={route.path}
            href={route.path}
            target='_self'
            className={clsx('hover:text-purple-700/hover', {
              'text-neutral-200': isCurrentPath,
              'text-neutral-600': !isCurrentPath,
            })}
          >
            <Tooltip color='primary' placement='right' content={`<${route.title} />`}>
              <Icon size={32} color='currentColor' weight={isCurrentPath ? 'fill' : 'regular'} />
            </Tooltip>
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
