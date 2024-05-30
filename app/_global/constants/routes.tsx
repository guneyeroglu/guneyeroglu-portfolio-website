'use client';

import { Desktop, Files, House, User } from '@phosphor-icons/react';

import { Spider } from '@assets/images';

import { URLS } from '../enums/urls';
import { IRoute } from '../interfaces';

export const routes: IRoute[] = [
  {
    icon: House,
    pathname: URLS.HOME,
    title: 'Home',
  },
  {
    icon: User,
    pathname: URLS.ABOUT,
    title: 'About',
  },
  {
    icon: Desktop,
    pathname: URLS.PROJECTS,
    title: 'Projects',
  },
  {
    icon: Files,
    pathname: URLS.BLOG,
    title: 'Blog',
  },
  {
    icon: Spider,
    pathname: URLS.REAL_ME,
    title: 'Spidey',
  },
];
