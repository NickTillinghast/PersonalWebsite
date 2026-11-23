// All site copy lives here. Anything in [BRACKETS] is a placeholder to fill in.

import type { ImageMetadata } from 'astro'
import amethystShot from './assets/amethystandash.png'
import horrorsShot from './assets/nickshouseofhorrors.png'
import juniorsShot from './assets/juniors.png'

export const person = {
  firstName: 'Nick',
  lastName: 'Tillinghast',
  email: 'nicktilling73@gmail.com',
  role: 'Software Engineer',
  location: 'Colorado',
}

export const fullName = `${person.firstName} ${person.lastName}`

export const site = {
  title: `${fullName}: full-stack developer`,
  description:
    'Full-stack developer in Colorado. I build web apps end to end, from the database to the last pixel. Also: horror fan.',
}

export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Off the clock', href: '/#off' },
  { label: 'Contact', href: '/#contact' },
]

export const hero = {
  intro:
    'I build web apps end to end, from the database to the last pixel, and I care about the details people feel but never notice.',
  work: 'Five years shipping production web apps in TypeScript, React and Next.js. I also run my own sites on AWS, from the Postgres database to the deploy pipeline.',
  credits: [
    { label: 'Starring', value: person.firstName },
    { label: 'Role', value: person.role },
    { label: 'Stack', value: 'TypeScript · React · Next.js · AWS' },
    { label: 'Filmed in', value: person.location },
    { label: 'Rated', value: 'R for relentless refactoring' },
  ],
}

export type Project = {
  title: string
  tag: string
  featured?: boolean
  summary: string
  stack: string[]
  /** Screenshot imported from src/assets. Any landscape shot works: the card shows
   *  the top of it in a 4:3 frame. Shows a placeholder until set. */
  image?: ImageMetadata
  imageAlt?: string
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    title: 'Nicks House of Horrors',
    image: horrorsShot,
    imageAlt: 'The Nicks House of Horrors homepage',
    tag: 'Now playing',
    featured: true,
    summary:
      'A horror movie site: where-to-stream lookups, a villain voting arena, a trivia quiz and paid fan Top 10 lists.',
    stack: ['Next.js', 'Supabase', 'AWS Lambda', 'Stripe', 'Playwright'],
    links: [
      { label: 'Visit the site', href: 'https://nickshouseofhorrors.com' },
      { label: 'View the code', href: 'https://github.com/NickTillinghast/nickshouseofhorrors' },
    ],
  },
  {
    title: 'Amethyst & Ash',
    image: amethystShot,
    imageAlt: 'The Amethyst & Ash homepage',
    tag: 'Feature',
    summary:
      'Website for a sobriety coaching business. The quiz starts a Sender.net email series matched to each result, Cal.com handles booking, and new leads arrive by email.',
    stack: ['Next.js', 'AWS Lambda', 'CloudFront', 'CloudFormation', 'SES', 'Sender.net', 'Cal.com'],
    links: [
      { label: 'Visit the site', href: 'https://amethystandashcoaching.com' },
      { label: 'View the code', href: 'https://github.com/NickTillinghast/amethystandash' },
    ],
  },
  {
    title: "Junior's Barber Parlor",
    image: juniorsShot,
    imageAlt: "The Junior's Barber Parlor homepage",
    tag: 'Feature',
    summary:
      'Website for a classic barbershop in midtown Phoenix, with services, team, booking and location pages.',
    stack: ['React', 'Vite', 'React Router'],
    links: [
      { label: 'Visit the site', href: 'https://juniors-pied.vercel.app/' },
      { label: 'View the code', href: 'https://github.com/NickTillinghast/juniors' },
    ],
  },
]

// Draft: trimmed from the About text on the old site. Rewrite in your own voice.
export const about = [
  "I spent over ten years running my own photography business in Phoenix, shooting corporate events and weddings. In 2019 I switched to software through Devmountain's full-stack program, and I've been building for the web ever since.",
  "I like turning designs into polished, reusable components and building internal tools that take manual work off people's plates. I'm looking for a team where I can pull more than my weight, and where the people matter as much as the work.",
  'Off hours I build side projects like Nicks House of Horrors, because the best way I know to learn a new tool is to ship something with it.',
]

// An item with an href turns its title into a link.
export const offTheClock: { label: string; title: string; note: string; href?: string }[] = [
  { label: 'Currently watching', title: 'Predator (1987)', note: 'All-time pick: The Thing (1982)' },
  {
    label: 'Behind the camera',
    title: 'Photography',
    href: 'https://www.instagram.com/nicktillinghastphotography/',
    note: '10+ years shooting events and weddings.',
  },
  { label: 'Also', title: 'Drums, heavy metal, Krav Maga', note: 'The holy trinity of fun.' },
]

export const contact = {
  heading: ["Let's build something", 'worth staying for.'],
  // An empty href renders the label as plain text with a placeholder note.
  socials: [
    { label: 'GitHub', href: 'https://github.com/NickTillinghast' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nick-tillinghast-065b2951' },
    { label: 'Instagram', href: 'https://www.instagram.com/nicktillinghast/' },
  ],
}
