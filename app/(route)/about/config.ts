import { IContent, IMeCard } from '@global/interfaces';
import { calculateAge } from '@global/utils/functions';

const me: IContent[] = [
  {
    title: 'Name',
    description: 'Güney Eroğlu',
  },
  {
    title: 'Age',
    description: String(calculateAge(new Date('1995-10-17'))),
  },
  {
    title: 'Job',
    description: 'Software Developer',
  },
  {
    title: 'E-mail',
    description: 'benguneyeroglu@gmail.com',
  },
];

const experiences: IContent[] = [
  {
    title: 'Job',
    description: 'Front-End Developer @LC Waikiki',
  },
  {
    title: 'Year',
    description: 'Jun 2022 - Now',
  },
];

const educations: IContent[] = [
  {
    title: 'School',
    description: "Uludağ University '20",
  },
  {
    title: 'Program',
    description: 'Computer Education and Instructional Technology',
  },
];

const skills: IContent[] = [
  {
    title: 'Language',
    description: 'JavaScript/TypeScript, Go',
  },
  {
    title: 'Tech',
    description: 'Next, React, React Native, Express, Fiber, Tailwind, Sass/SCSS, etc.',
  },
  {
    title: 'Database',
    description: 'MSSQL, PostgreSQL, MongoDB',
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
