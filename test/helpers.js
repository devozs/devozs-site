const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Oz Shmemesh',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Oz Shemesh',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Oz Shemesh',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Oz Shemesh',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Oz Shemesh',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
