'use client';

import { FC, JSX, PropsWithChildren } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tooltip } from '@nextui-org/react';
import clsx from 'clsx';

import { Dot } from '@assets/images';
import { URLS } from '@global/enums';
import { IColorClsx } from '@global/interfaces';
import { useMeStore } from '@store';

import SocialMedia from './SocialMedia';

const Footer: FC = () => {
  const pathname: URLS = usePathname() as URLS;
  const { hover } = useMeStore();

  const color: IColorClsx = {
    'hover:text-purple-700/hover': pathname === URLS.HOME,
    'hover:text-neutral-700/hover': pathname === URLS.ABOUT,
    'hover:text-danger-700/hover': pathname === URLS.REAL_ME,
    'hover:text-warning-700/hover': pathname === URLS.PROJECTS,
    'hover:text-success-700/hover': pathname === URLS.BLOG,
  };

  const colorDot: IColorClsx = {
    'text-purple-700': pathname === URLS.HOME,
    'text-neutral-700': (!hover && pathname === URLS.ABOUT) || (hover && pathname === URLS.REAL_ME),
    'text-danger-700': (!hover && pathname === URLS.REAL_ME) || (hover && pathname === URLS.ABOUT),
    'text-warning-700': pathname === URLS.PROJECTS,
    'text-success-700': pathname === URLS.BLOG,
  };

  const Wrapper: FC<PropsWithChildren> = ({ children }) => {
    let Element: JSX.Element;

    if (pathname === URLS.ABOUT || pathname === URLS.REAL_ME) {
      Element = (
        <Link
          className='w-full h-full flex justify-center items-center'
          href={pathname === URLS.ABOUT ? URLS.REAL_ME : URLS.ABOUT}
        >
          {children}
        </Link>
      );
    } else {
      Element = <>{children}</>;
    }

    return Element;
  };

  return (
    <footer className='fixed inset-4 top-auto flex justify-between items-center h-14'>
      <div className='h-full flex flex-1 justify-start items-center border-1 border-divider border-l-0 border-r-0'>
        <Tooltip isDisabled={pathname !== URLS.ABOUT} content='Go Tiger!'>
          <div
            className={clsx(
              'w-14 h-full flex justify-center items-center border-1 border-divider border-t-0 border-b-0 cursor-default',
              {
                ...colorDot,
                'hover:text-danger-700 cursor-pointer': pathname === URLS.ABOUT,
                'hover:text-neutral-700 cursor-pointer': pathname === URLS.REAL_ME,
              },
            )}
          >
            <Wrapper>
              <Dot />
            </Wrapper>
          </div>
        </Tooltip>
      </div>
      <div className='h-full flex flex-1 justify-center items-center border-1 border-divider border-l-0 border-r-0'>
        <span className='text-base font-normal text-neutral-400'>
          Created by
          <Link
            href={URLS.ABOUT}
            className={clsx('text-neutral-500 cursor-pointer', {
              ...color,
            })}
          >
            {pathname !== URLS.REAL_ME ? ` Güney Eroğlu ` : ` Spider-Man `}
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
