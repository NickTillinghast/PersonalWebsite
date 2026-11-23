// All site copy lives here. Anything in [BRACKETS] is a placeholder to fill in.

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
  work: '[ONE LINE ABOUT WHAT YOU DO AT WORK]',
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
  /** Path in /public, e.g. '/work/hoh-poster.jpg'. Shows a placeholder until set. */
  image?: string
  imageAlt?: string
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    title: 'Nicks House of Horrors',
    tag: 'Now playing',
    featured: true,
    summary:
      'A horror movie site: where-to-stream lookups, a villain voting arena, a trivia quiz and paid fan Top 10 lists.',
    stack: ['Next.js', 'Supabase', 'AWS Lambda', 'Stripe', 'Playwright'],
    links: [{ label: 'Visit the site', href: 'https://nickshouseofhorrors.com' }],
  },
  {
    title: 'Amethyst & Ash',
    tag: 'Feature',
    summary:
      'Website for a sobriety coaching business: the method, coaching offers, a quiz, scholarships and contact.',
    stack: ['Next.js', 'TypeScript', 'React'],
    links: [{ label: 'View the code', href: 'https://github.com/NickTillinghast/amethystandash' }],
  },
  {
    title: "Junior's Barber Parlor",
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
  "I spent ten years running my own photography business in Phoenix, shooting corporate events and weddings. In 2019 I switched to software through Devmountain's full-stack program, and I've been building for the web ever since.",
  "I like turning designs into polished, reusable components and building internal tools that take manual work off people's plates. [What kind of team or problem you want next.]",
  'Off hours I build side projects like Nicks House of Horrors, because the best way I know to learn a new tool is to ship something with it.',
]

export const offTheClock = [
  { label: 'Currently watching', title: '[A HORROR MOVIE]', note: 'All-time pick: [YOUR #1]' },
  { label: 'Behind the camera', title: 'Photography', note: 'Ten years shooting events and weddings.' },
  { label: 'Also', title: 'Drums, puzzles, Krav Maga', note: '[One line about it]' },
]

export const contact = {
  heading: ["Let's build something", 'worth staying for.'],
  // An empty href renders the label as plain text with a placeholder note.
  socials: [
    { label: 'GitHub', href: 'https://github.com/NickTillinghast' },
    { label: 'LinkedIn', href: '' },
    { label: 'Instagram', href: '' },
  ],
}
