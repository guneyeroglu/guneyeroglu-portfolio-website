import {
  Angular,
  Fiber,
  Go,
  JavaScript,
  Next,
  React,
  SCSS,
  Tailwind,
  TypeScript,
  Node,
  Express,
} from '@assets/images';
import { TECHS } from '@global/enums';
import { Techs } from '@global/types';

export const techs: Techs = {
  [TECHS.JavaScript]: {
    label: 'JavaScript',
    logo: JavaScript,
  },
  [TECHS.TypeScript]: {
    label: 'TypeScript',
    logo: TypeScript,
  },
  [TECHS.Next]: {
    label: 'Next.js',
    logo: Next,
  },
  [TECHS.React]: {
    label: 'React.js',
    logo: React,
  },
  [TECHS.ReactNative]: {
    label: 'React Native',
    logo: React,
  },
  [TECHS.Angular]: {
    label: 'Angular',
    logo: Angular,
  },
  [TECHS.SCSS]: {
    label: 'Sass/SCSS',
    logo: SCSS,
  },
  [TECHS.Tailwind]: {
    label: 'Tailwindcss',
    logo: Tailwind,
  },
  [TECHS.Go]: {
    label: 'Golang',
    logo: Go,
  },
  [TECHS.Fiber]: {
    label: 'Fiber',
    logo: Fiber,
  },
  [TECHS.Node]: {
    label: 'Node.js',
    logo: Node,
  },
  [TECHS.Express]: {
    label: 'Express.js',
    logo: Express,
  },
};
