'use client';

import { LinkedinLogo, GithubLogo, InstagramLogo, XLogo } from '@phosphor-icons/react';

import { ISocialMedia } from '@global/interfaces';

export const socialMedias: ISocialMedia[] = [
  {
    link: 'https://www.linkedin.com/in/guneyeroglu/',
    icon: LinkedinLogo,
  },
  {
    link: 'https://github.com/guneyeroglu/',
    icon: GithubLogo,
  },
  {
    link: 'https://www.instagram.com/guneyeroglu_/',
    icon: InstagramLogo,
  },
  {
    link: 'https://x.com/guneyeroglu_',
    icon: XLogo,
  },
];
