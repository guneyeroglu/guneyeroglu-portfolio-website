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
import PopoverSocialMedia from './PopoverSocialMedia/PopoverSocialMedia';

const Footer: FC = () => {
  const pathname: URLS = usePathname() as URLS;
  const { hover } = useMeStore();

  const color: IColorClsx = {
    'hover:text-purple-700/hover': pathname === URLS.HOME,
    'hover:text-neutral-500/hover': pathname === URLS.ABOUT,
    'hover:text-danger-700/hover': pathname === URLS.REAL_ME,
    'hover:text-warning-700/hover': pathname === URLS.PROJECTS,
    'hover:text-success-700/hover': pathname === URLS.CONTACT,
  };

  const colorDot: IColorClsx = {
    'text-purple-700': pathname === URLS.HOME,
    'text-neutral-700': (!hover && pathname === URLS.ABOUT) || (hover && pathname === URLS.REAL_ME),
    'text-danger-700': (!hover && pathname === URLS.REAL_ME) || (hover && pathname === URLS.ABOUT),
    'text-warning-700': pathname === URLS.PROJECTS,
    'text-success-700': pathname === URLS.CONTACT,
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

  const handleTooltipColor = (): string => {
    switch (pathname) {
      case URLS.ABOUT:
        return 'bg-danger-700';
      case URLS.REAL_ME:
        return 'bg-neutral-700';
      default:
        return 'bg-neutral-700';
    }
  };

  const handleTooltipText = (): string => {
    switch (pathname) {
      case URLS.ABOUT:
        return 'Go Tiger!';
      case URLS.REAL_ME:
        return 'Go Back Web-Head';
      default:
        return '';
    }
  };

  return (
    <footer className='sticky inset-0 m-4 mt-0 top-auto flex justify-between items-center h-14 border-r-1 border-r-divider'>
      <div className='h-full flex flex-1 justify-start items-center border-1 border-divider border-l-0 border-r-0 max-md:flex-none'>
        <Tooltip
          isDisabled={pathname !== URLS.ABOUT && pathname !== URLS.REAL_ME}
          content={handleTooltipText()}
          placement='right'
          className={handleTooltipColor()}
        >
          <div
            className={clsx(
              'w-14 h-full flex justify-center items-center border-1 border-divider border-t-0 border-b-0 cursor-default',
              {
                ...colorDot,
                'hover:text-danger-700 cursor-pointer': pathname === URLS.ABOUT,
                'hover:text-neutral-500 cursor-pointer': pathname === URLS.REAL_ME,
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
        <span className='text-base text-center font-normal text-neutral-400 max-sm:text-sm'>
          © 2024 by
          <Link
            href={URLS.ABOUT}
            className={clsx('cursor-pointer', {
              ...color,
            })}
          >
            {pathname !== URLS.REAL_ME ? ` Güney Eroğlu ` : ` Spider-Man `}
          </Link>
        </span>
      </div>
      <div className='h-full flex flex-1 justify-end items-center border-1 border-divider border-l-0 border-r-0 max-md:flex-none max-md:pr-4 max-md:justify-center'>
        <div className='block max-md:hidden'>
          <SocialMedia />
        </div>
        <div className='hidden items-center justify-center max-md:block'>
          <PopoverSocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
