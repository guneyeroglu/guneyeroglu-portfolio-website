import {
  LCWMain,
  RickAndMortyMain,
  RiotGamesMain,
  RentHouseMain,
  WanderWheelsMain,
  CineCornMain,
} from '@assets/images';
import { TECHS } from '@global/enums';
import { IMyProject } from '@global/interfaces';

export const myProjects: IMyProject[] = [
  {
    id: 1,
    title: 'LC Waikiki Clone Web App',
    image: LCWMain,
    details: {
      links: {
        website: 'https://lcwaikikiclone.vercel.app',
        gitHub: ['https://github.com/guneyeroglu/LC-Waikiki-Case'],
      },
      description: `This project aims to create a clone of LC Waikiki's e-commerce website. Users can list products, search and sort among listed items, add liked products to favorites, and view them in a list. Finally, they can proceed with purchasing their selected items.`,
      techs: [TECHS.React, TECHS.JavaScript, TECHS.SCSS],
    },
  },
  {
    id: 2,
    title: 'Rick and Morty Wiki Web App',
    image: RickAndMortyMain,
    details: {
      links: {
        website: 'https://wiki-rickandmorty.vercel.app',
        linkedIn:
          'https://www.linkedin.com/posts/guneyeroglu_reactjs-react-scss-activity-6966055686367559681-QayH',
        gitHub: ['https://github.com/guneyeroglu/rick-and-morty-app'],
      },
      description: `This project is a web application that lists the characters, episodes, and locations from the Rick and Morty TV show. Users can add characters to their favorites and view their favorite list. Additionally, they can list the characters appearing in specific episodes and locations.`,
      techs: [TECHS.React, TECHS.JavaScript, TECHS.SCSS],
    },
  },
  {
    id: 3,
    title: 'Riot Games All in One Web App',
    image: RiotGamesMain,
    details: {
      links: {
        website: 'https://riotgamesallinone.vercel.app',
        linkedIn:
          'https://www.linkedin.com/posts/guneyeroglu_react-typescript-riotgames-activity-7058119018678788096-wHrC',
        gitHub: ['https://github.com/guneyeroglu/riot-games-app'],
      },
      description: `This project is a web application related to League of Legends (LoL) and Valorant. Users can list and explore the details of champions and regions in LoL. Similarly, in Valorant, users can list the agents, maps, and weapons, view their features, and learn about them.`,
      techs: [TECHS.React, TECHS.TypeScript, TECHS.SCSS],
    },
  },
  {
    id: 4,
    title: 'House Rent Web App',
    image: RentHouseMain,
    details: {
      links: {
        website: 'https://rent-house-ng.vercel.app/home',
        gitHub: ['https://github.com/guneyeroglu/rent-house-ng'],
      },
      description: `This project is a web application called House Rent. Users can list houses and search for them. Additionally, they can view details and learn more about the houses.`,
      techs: [TECHS.Angular, TECHS.TypeScript, TECHS.SCSS],
    },
  },
  {
    id: 5,
    title: 'Wander Wheels Car Rental Web App',
    image: WanderWheelsMain,
    details: {
      links: {
        website: 'https://wander-wheels.vercel.app',
        linkedIn:
          'https://www.linkedin.com/posts/guneyeroglu_vite-react-typescript-activity-7193934319332057090-yIcn',
        gitHub: [
          'https://github.com/guneyeroglu/wander-wheels-fe',
          'https://github.com/guneyeroglu/wander-wheels-be',
        ],
      },
      description: `Wander Wheels is a car rental website. Users can list cars based on selected dates and locations and filter them by specific features. They can then view detailed information about the car and see the total rental cost. If the rental terms are satisfactory, they can proceed to rent the car.`,
      techs: [TECHS.React, TECHS.TypeScript, TECHS.Tailwind, TECHS.Go, TECHS.Fiber],
    },
  },
  {
    id: 6,
    title: 'CineCorn Movie Web App',
    image: CineCornMain,
    details: {
      links: {
        website: 'https://cinecorn.vercel.app',
        linkedIn:
          'https://www.linkedin.com/posts/guneyeroglu_angular-angular-golang-activity-7248649770259365888-eO-x',
        gitHub: [
          'https://github.com/guneyeroglu/cine-corn-fe',
          'https://github.com/guneyeroglu/cine-corn-be',
        ],
      },
      description: `CineCorn is a movie web application where users can browse and explore a wide range of movies. Logged-in users have the ability to add or remove movies from their favorites or personal lists. The application provides detailed information about each movie, including genres, star actors, duration, and description, enhancing the overall user experience.`,
      techs: [TECHS.Angular, TECHS.TypeScript, TECHS.SCSS, TECHS.Go, TECHS.Fiber],
    },
  },
];
