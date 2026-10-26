// All site content lives here — edit this file to update the portfolio.

export const profile = {
  name: 'Nick Tillinghast',
  role: 'Software Engineer',
  tagline:
    'I build fast, accessible web apps with TypeScript, React, Next.js, and Astro — turning Figma designs into reusable components and shipping tools that make teams faster.',
  location: 'Broomfield, CO',
  email: 'nicktilling73@gmail.com',
  // Leave empty to hide the Resume button (e.g. drop a PDF in /public and use '/resume.pdf').
  resumeUrl: '',
  socials: [{ label: 'GitHub', url: 'https://github.com/NickTillinghast' }],
}

export const about = [
  "I'm a software engineer with 5+ years of professional experience building frontend features in TypeScript, React, Next.js, and Astro. I like turning designs into polished, reusable components and building internal tools that take manual work off people's plates.",
  'Before code, I spent ten years running my own photography business in Phoenix — shooting corporate events and weddings and handling everything from client acquisition to final delivery. That taught me to work under deadline pressure, communicate clearly with clients, and sweat the visual details.',
  "In 2019 I made the jump to software through Devmountain's full-stack program, and I've been building for the web ever since. These days I use AI tools to move faster while keeping quality high through strict typing, testing, and thorough code review.",
]

export const skills = [
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'Astro',
  'Node.js',
  'HTML & CSS',
  'Playwright',
  'Docker',
  'Git',
  'GitHub',
  'Bitbucket',
  'Jira',
  'AI-assisted development',
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'The Krazy Coupon Lady',
    location: 'Broomfield, CO',
    dates: 'Jul 2021 – Oct 2026',
    highlights: [
      'Built and maintained responsive, accessible frontend features in TypeScript, React, and Next.js, unifying content from multiple headless CMS platforms into a single data layer.',
      'Translated Figma designs into reusable, production-ready components, keeping design fidelity and consistency across applications.',
      'Migrated data fetching and shared libraries from Next.js to Astro, improving page load times by 10%.',
      'Developed internal tools that streamlined article creation and affiliate revenue workflows, reducing manual effort for editorial and business teams.',
      'Partnered with designers, backend engineers, and product stakeholders through code reviews and sprint planning, and supported CI/CD deployments.',
    ],
  },
  {
    role: 'Full Stack Web Development Program',
    company: 'Devmountain',
    location: 'Phoenix, AZ',
    dates: 'Sep 2019 – Dec 2019',
    highlights: [
      'Intensive 13-week program covering JavaScript, React, Node.js, and databases.',
      'Built multiple full-stack applications, including thisisdevmtn.com, in agile team environments.',
    ],
  },
  {
    role: 'Professional Photographer & Business Owner',
    company: 'Nick Tillinghast Photography',
    location: 'Phoenix, AZ',
    dates: 'Jan 2010 – Jan 2020',
    highlights: [
      'Photographed corporate events and weddings, delivering polished, on-deadline work in fast-moving conditions.',
      'Coordinated a network of photographers to staff large-scale events — schedules, shot lists, and handoffs.',
      'Ran the business end to end: client communication, contracts, pricing, scheduling, marketing, post-production, and delivery.',
      'Built long-term client relationships that generated repeat and referral business.',
    ],
  },
]

export const interests = ['Photography', 'Drums', 'Music', 'Puzzles', 'Krav Maga']

// TODO: replace the placeholders with real projects (live URL + GitHub repo).
export const projects = [
  {
    title: 'thisisdevmtn.com',
    description: 'Full-stack team project built during the Devmountain program in an agile environment.',
    tech: ['JavaScript', 'React', 'Node.js'],
    liveUrl: 'https://thisisdevmtn.com',
    repoUrl: '',
  },
  {
    title: 'Project Two',
    description: 'Placeholder — add a project that shows off your React / TypeScript work.',
    tech: ['TypeScript', 'React'],
    liveUrl: '',
    repoUrl: '',
  },
  {
    title: 'Project Three',
    description: 'Placeholder — an Astro or Next.js build would round this out nicely.',
    tech: ['Astro'],
    liveUrl: '',
    repoUrl: '',
  },
]
