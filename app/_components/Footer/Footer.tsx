import { FC } from 'react';
import Link from 'next/link';

import { Dot } from '@assets/images';
import { URLS } from '@global/enums';

import SocialMedia from './SocialMedia';

const Footer: FC = () => {
  return (
    <footer className='flex justify-between items-center h-14'>
      <div className='h-full flex flex-1 justify-start items-center border-1 border-divider border-l-0 border-r-0'>
        <div className='w-14 h-full flex justify-center items-center text-purple-700 border-1 border-divider border-t-0 border-b-0'>
          <Dot />
        </div>
      </div>
      <div className='h-full flex flex-1 justify-center items-center border-1 border-divider border-l-0 border-r-0'>
        <span className='text-base font-normal text-neutral-400'>
          Created by
          <Link href={URLS.HOME} className='cursor-pointer hover:text-purple-700/hover'>
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
