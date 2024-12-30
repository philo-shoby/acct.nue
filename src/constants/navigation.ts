export const navItems = ['about', 'services', 'contact'] as const;

export type NavItem = (typeof navItems)[number];