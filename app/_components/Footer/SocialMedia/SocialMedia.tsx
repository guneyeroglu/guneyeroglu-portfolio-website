'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from '@phosphor-icons/react';
import clsx from 'clsx';

import { socialMedias } from '@global/constants';
import { URLS } from '@global/enums';
import { IColorClsx, ISocialMedia } from '@global/interfaces';
import { Tooltip } from '@nextui-org/react';

const SocialMedia: FC = () => {
  const pathname: URLS = usePathname() as URLS;

  const color: IColorClsx = {
    'hover:text-purple-700/hover': pathname === URLS.HOME,
    'hover:text-neutral-500/hover': pathname === URLS.ABOUT,
    'hover:text-danger-700/hover': pathname === URLS.REAL_ME,
    'hover:text-warning-700/hover': pathname === URLS.PROJECTS,
    'hover:text-success-700/hover': pathname === URLS.BLOG,
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
      case URLS.BLOG:
        return 'bg-success-700';
      default:
        return 'bg-neutral-700';
    }
  };

  return (
    <div className='flex justify-center items-center'>
      {socialMedias.map((socialMedia: ISocialMedia) => {
        const Icon: Icon = socialMedia.icon;

        return (
          <Tooltip
            key={socialMedia.link}
            placement='top'
            content={socialMedia.label}
            className={handleTooltipColor()}
          >
            <a
              href={socialMedia.link}
              target='_blank'
              className={clsx('p-4 cursor-pointer text-neutral-400', {
                ...color,
              })}
            >
              <Icon size={24} color='currentColor' weight='regular' />
            </a>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default SocialMedia;
