'use client';

import { Desktop, Files, House, User } from '@phosphor-icons/react';

import { URLS } from '../enums/urls';
import { IRoute } from '../interfaces';

export const routes: IRoute[] = [
  {
    icon: House,
    path: URLS.HOME,
    title: 'Home',
  },
  {
    icon: User,
    path: URLS.ABOUT,
    title: 'About',
  },
  {
    icon: Desktop,
    path: URLS.PROJECTS,
    title: 'Projects',
  },
  {
    icon: Files,
    path: URLS.BLOG,
    title: 'Blog',
  },
];
