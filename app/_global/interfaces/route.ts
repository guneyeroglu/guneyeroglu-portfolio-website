import { Icon } from '@phosphor-icons/react';

import { URLS } from '../enums/urls';

export interface IRoute {
  icon: Icon;
  pathname: URLS;
  title: string;
}
