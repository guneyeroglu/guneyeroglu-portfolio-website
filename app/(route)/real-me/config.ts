import { IContent, IMeCard } from '@global/interfaces';

const me: IContent[] = [
  {
    title: 'Name',
    description: 'Spider-Man',
  },
  {
    title: 'Age',
    description: '29',
  },
  {
    title: 'Job',
    description: 'Full-Time Super Hero',
  },
  {
    title: 'E-mail',
    description: 'friendly.neighborhood@spiderman.com',
  },
];

const experiences: IContent[] = [
  {
    title: 'Job',
    description: 'Super Hero @Avengers',
  },
  {
    title: 'Year',
    description: 'May 2016 - Now',
  },
];

const educations: IContent[] = [
  {
    title: 'School',
    description: "Avengers Hero School '12",
  },
  {
    title: 'Program',
    description: "Nick Fury's Talented Student Camp",
  },
];

const skills: IContent[] = [
  {
    title: 'Powers',
    description: 'Superhuman strength, speed, agility, and reflexes, Spider-Sense, wall-crawling',
  },
  {
    title: 'Combats',
    description:
      'Expert hand-to-hand combatant, skilled acrobat, proficient in various martial arts.',
  },
  {
    title: 'Intellect',
    description:
      'Genius-level intellect, skilled scientist and inventor, expertise in chemistry, physics, and engineering.',
  },
  {
    title: 'Gadgets',
    description: 'Web-shooters, Spider-Tracers, utility belt, spider-signal.',
  },
];

export const meCards: IMeCard[] = [
  {
    label: 'Me',
    contents: me,
  },
  {
    label: 'Work Experiences',
    contents: experiences,
  },
  {
    label: 'Educations',
    contents: educations,
  },
  {
    label: 'Skills',
    contents: skills,
  },
];
