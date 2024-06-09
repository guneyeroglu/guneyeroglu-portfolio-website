import { TECHS } from '@global/enums';
import { IMyProject } from '@global/interfaces';

export const myProjects: IMyProject[] = [
  {
    title: 'LC Waikiki Clone Web App',
    image: '',
    details: {
      link: 'https://lcwaikikiclone.vercel.app',
      techs: [TECHS.React, TECHS.JavaScript, TECHS.SCSS],
      description: '',
      images: [''],
    },
  },
  {
    title: 'Rick and Morty Wiki Web App',
    image: '',
    details: {
      link: 'https://wiki-rickandmorty.vercel.app',
      techs: [TECHS.React, TECHS.JavaScript, TECHS.SCSS],
      description: '',
      images: [''],
    },
  },
  {
    title: 'Riot Games All in One Web App',
    image: '',
    details: {
      link: 'https://riotgamesallinone.vercel.app',
      techs: [TECHS.React, TECHS.TypeScript, TECHS.SCSS],
      description: '',
      images: [''],
    },
  },
  {
    title: 'House Rent Web App',
    image: '',
    details: {
      link: 'https://rent-house-ng.vercel.app/home',
      techs: [TECHS.Angular, TECHS.TypeScript, TECHS.SCSS],
      description: '',
      images: [''],
    },
  },
  {
    title: 'Wander Wheels | Car Rental Web App',
    image: '',
    details: {
      link: 'https://wander-wheels.vercel.app',
      techs: [TECHS.React, TECHS.TypeScript, TECHS.Tailwind, TECHS.Go, TECHS.Fiber],
      description: '',
      images: [''],
    },
  },
];
