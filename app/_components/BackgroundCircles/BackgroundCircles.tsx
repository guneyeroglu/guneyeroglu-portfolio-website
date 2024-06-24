'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { URLS } from '@global/enums';

const BackgroundCircles: FC = () => {
  const pathname: URLS = usePathname() as URLS;

  return (
    <>
      <div
        className={clsx('fixed blur-3xl w-[450px] h-[450px] rounded-full -z-10', {
          'left-20 top-20 bg-purple-500/40': pathname === URLS.HOME,
          'right-16 bottom-64 bg-neutral-500/40': pathname === URLS.ABOUT,
          'right-16 bottom-64 bg-danger-500/40': pathname === URLS.REAL_ME,
          'right-16 top-64 bg-warning-500/40': pathname === URLS.PROJECTS,
          'left-20 bottom-20 bg-success-500/40': pathname === URLS.CONTACT,
        })}
      />
      <div
        className={clsx('fixed blur-3xl w-[450px] h-[450px] rounded-full -z-10', {
          'right-32 bottom-32 bg-purple-500/40': pathname === URLS.HOME,
          'left-16 top-64 bg-neutral-500/40': pathname === URLS.ABOUT,
          'left-16 top-64 bg-danger-500/40': pathname === URLS.REAL_ME,
          'left-16 bottom-64 bg-warning-500/40': pathname === URLS.PROJECTS,
          'right-32 top-32 bg-success-500/40': pathname === URLS.CONTACT,
        })}
      />
    </>
  );
};

export default BackgroundCircles;
