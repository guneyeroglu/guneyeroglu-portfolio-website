import { StaticImageData } from 'next/image';

import { TECHS } from '@global/enums';

export interface IMyProject {
  title: string;
  image: StaticImageData;
  details: {
    link: string;
    techs: (keyof typeof TECHS)[];
    description: string;
    images: string[];
  };
}
