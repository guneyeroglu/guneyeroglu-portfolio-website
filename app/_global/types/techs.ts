import { JSX } from 'react';

import { TECHS } from '@global/enums';

export type Techs = {
  [key in keyof typeof TECHS]: {
    label: string;
    logo: JSX.Element;
  };
};
