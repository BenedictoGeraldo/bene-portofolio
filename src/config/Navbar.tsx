export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: '/assets/logo.jpg',
    alt: 'logo',
    width: 100,
    height: 100,
  },
  navItems: [
    ,
    {
      label: 'About',
      href: '#about',
    },
    {
      label: 'Experience',
      href: '#experience',
    },
    {
      label: 'Technology',
      href: '#tech',
    },
    {
      label: 'Projects',
      href: '#projects',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ] as NavItem[],
};
