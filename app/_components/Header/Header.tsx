'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { Code } from '@phosphor-icons/react';
import clsx from 'clsx';

import { URLS } from '@global/enums';
import { IColorClsx } from '@global/interfaces';

const Header: FC = () => {
  const pathname: URLS = usePathname() as URLS;

  const color: IColorClsx = {
    'text-purple-700': pathname === URLS.HOME,
    'text-neutral-500': pathname === URLS.ABOUT,
    'text-danger-700': pathname === URLS.REAL_ME,
    'text-warning-700': pathname === URLS.PROJECTS,
    'text-success-700': pathname === URLS.CONTACT,
  };

  return (
    <header className='sticky inset-0 m-4 mb-0 flex justify-between items-center h-14'>
      <div className='h-full border-1 border-divider border-l-0 border-r-0'>
        <div
          className={clsx(
            'w-14 h-full flex justify-center items-center border-1 border-divider border-t-0 border-b-0',
            {
              ...color,
            },
          )}
        >
          <Code size={32} color='currentColor' />
        </div>
      </div>
      <div className='flex flex-1 h-full justify-center items-center border-1 border-divider border-l-0'>
        <h1 className='text-xl text-neutral-200'>
          Güney
          <span
            className={clsx({
              ...color,
            })}
          >
            {' <Eroğlu />'}
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
