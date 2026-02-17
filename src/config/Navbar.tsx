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
  navItems: [] as NavItem[], //can be adjusted as needed
};
