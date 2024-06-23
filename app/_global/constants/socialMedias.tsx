'use client';

import { LinkedinLogo, GithubLogo, InstagramLogo, XLogo } from '@phosphor-icons/react';

import { ISocialMedia } from '@global/interfaces';

export const socialMedias: ISocialMedia[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/guneyeroglu/',
    icon: LinkedinLogo,
  },
  {
    label: 'GitHub',
    link: 'https://github.com/guneyeroglu/',
    icon: GithubLogo,
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/guneyeroglu_/',
    icon: InstagramLogo,
  },
  {
    label: 'X',
    link: 'https://x.com/guneyeroglu_',
    icon: XLogo,
  },
];
