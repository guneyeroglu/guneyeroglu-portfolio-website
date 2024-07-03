import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { Hash } from '@phosphor-icons/react';
import clsx from 'clsx';

import { DIRECTIONS, URLS } from '@global/enums';
import { IColorClsx } from '@global/interfaces';

import SocialMedia from '../SocialMedia';

const PopoverSocialMedia: FC = () => {
  const pathname: URLS = usePathname() as URLS;

  const color: IColorClsx = {
    'text-purple-700': pathname === URLS.HOME,
    'text-neutral-500': pathname === URLS.ABOUT,
    'text-danger-700': pathname === URLS.REAL_ME,
    'text-warning-700': pathname === URLS.PROJECTS,
    'text-success-700': pathname === URLS.CONTACT,
  };

  return (
    <Popover showArrow backdrop='opaque'>
      <PopoverTrigger className='aria-expanded:scale-100'>
        <div
          className={clsx({
            ...color,
          })}
        >
          <Hash size={28} color='currentColor' />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <SocialMedia direction={DIRECTIONS.y} />
      </PopoverContent>
    </Popover>
  );
};

export default PopoverSocialMedia;
