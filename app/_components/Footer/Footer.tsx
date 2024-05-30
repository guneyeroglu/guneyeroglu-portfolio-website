'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { Dot } from '@assets/images';
import { URLS } from '@global/enums';

import SocialMedia from './SocialMedia';
import { IColorClsx } from '@global/interfaces';

const Footer: FC = () => {
  const pathname: URLS = usePathname() as URLS;

  const color: IColorClsx = {
    'hover:text-purple-700/hover': pathname === URLS.HOME,
    'hover:text-neutral-700/hover': pathname === URLS.ABOUT,
    'hover:text-warning-700/hover': pathname === URLS.PROJECTS,
    'hover:text-success-700/hover': pathname === URLS.BLOG,
  };
  const colorDot: IColorClsx = {
    'text-purple-700': pathname === URLS.HOME,
    'text-neutral-700': pathname === URLS.ABOUT,
    'text-warning-700': pathname === URLS.PROJECTS,
    'text-success-700': pathname === URLS.BLOG,
  };

  return (
    <footer className='flex justify-between items-center h-14'>
      <div className='h-full flex flex-1 justify-start items-center border-1 border-divider border-l-0 border-r-0'>
        <div
          className={clsx(
            'w-14 h-full flex justify-center items-center border-1 border-divider border-t-0 border-b-0',
            {
              ...colorDot,
            },
          )}
        >
          <Dot />
        </div>
      </div>
      <div className='h-full flex flex-1 justify-center items-center border-1 border-divider border-l-0 border-r-0'>
        <span className='text-base font-normal text-neutral-400'>
          Created by
          <Link
            href={URLS.HOME}
            className={clsx('text-neutral-500 cursor-pointer', {
              ...color,
            })}
          >
            {` Güney Eroğlu `}
          </Link>
          ©2024™
        </span>
      </div>
      <div className='h-full flex flex-1 justify-end items-center border-1 border-divider border-l-0'>
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
