import { Icon } from '@phosphor-icons/react';

import { URLS } from '../enums/urls';

export interface IRoute {
  icon: Icon;
  path: URLS;
  title: string;
}
