'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from '@phosphor-icons/react';
import clsx from 'clsx';

import { socialMedias } from '@global/constants';
import { URLS } from '@global/enums';
import { IColorClsx, ISocialMedia } from '@global/interfaces';

const SocialMedia: FC = () => {
  const pathname: URLS = usePathname() as URLS;

  const color: IColorClsx = {
    'hover:text-purple-700/hover': pathname === URLS.HOME,
    'hover:text-neutral-700/hover': pathname === URLS.ABOUT,
    'hover:text-danger-700/hover': pathname === URLS.REAL_ME,
    'hover:text-warning-700/hover': pathname === URLS.PROJECTS,
    'hover:text-success-700/hover': pathname === URLS.BLOG,
  };

  return (
    <div className='flex justify-center items-center'>
      {socialMedias.map((socialMedia: ISocialMedia) => {
        const Icon: Icon = socialMedia.icon;

        return (
          <a
            key={socialMedia.link}
            href={socialMedia.link}
            target='_blank'
            className={clsx('p-4 cursor-pointer text-neutral-400', {
              ...color,
            })}
          >
            <Icon size={24} color='currentColor' weight='regular' />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
