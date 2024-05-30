import { IContent, IMeCard } from '@global/interfaces';
import { calculateAge } from '@global/utils/functions';

const me: IContent[] = [
  {
    title: 'Name',
    description: 'Spider-Man',
  },
  {
    title: 'Age',
    description: String(calculateAge(new Date('1995-10-17'))),
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

const experience: IContent[] = [
  {
    title: 'Job',
    description: 'Super Hero @Avengers',
  },
  {
    title: 'Year',
    description: 'May 2016 - Now',
  },
];

const education: IContent[] = [
  {
    title: 'School',
    description: "Avengers Hero School '12",
  },
  {
    title: 'Program',
    description: "Nick Fury's Talented Student Camp",
  },
];

const skill: IContent[] = [
  {
    title: 'Powers',
    description: 'Superhuman strength, speed, agility, and reflexes, Spider-Sense, wall-crawling',
  },
  {
    title: 'Combat Skills',
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
    label: 'Work Experience',
    contents: experience,
  },
  {
    label: 'Educations',
    contents: education,
  },
  {
    label: 'Skills',
    contents: skill,
  },
];
