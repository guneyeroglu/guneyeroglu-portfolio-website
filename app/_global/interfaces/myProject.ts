import { TECHS } from '@global/enums';

export interface IMyProject {
  title: string;
  image: string;
  details: {
    link: string;
    techs: (keyof typeof TECHS)[];
    description: string;
    images: string[];
  };
}
