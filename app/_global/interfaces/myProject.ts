import { StaticImageData } from 'next/image';

import { TECHS } from '@global/enums';

export interface IMyProject {
  id: number;
  title: string;
  image: StaticImageData;
  details: {
    links: {
      website?: string;
      gitHub?: string[];
      linkedIn?: string;
    };
    description: string;
    techs: (keyof typeof TECHS)[];
  };
}
