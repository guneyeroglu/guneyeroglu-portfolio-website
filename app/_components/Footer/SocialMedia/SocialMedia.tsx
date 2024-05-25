'use client';

import { FC } from 'react';
import { Icon } from '@phosphor-icons/react';

import { socialMedias } from '@global/constants';
import { ISocialMedia } from '@global/interfaces';

const SocialMedia: FC = () => {
  return (
    <div className='flex justify-center items-center'>
      {socialMedias.map((socialMedia: ISocialMedia) => {
        const Icon: Icon = socialMedia.icon;

        return (
          <a
            key={socialMedia.link}
            href={socialMedia.link}
            target='_blank'
            className='p-4 cursor-pointer text-neutral-200 hover:text-purple-700/hover'
          >
            <Icon size={24} color='currentColor' weight='regular' />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
