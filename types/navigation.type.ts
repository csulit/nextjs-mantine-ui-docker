export type NavItem = {
  id: string;
  active: boolean;
  label: string;
  href: string;
  icon: React.FC<any> | null;
  child: NavItem[] | null;
};

export type NavState = NavItem[];

export type NavAction = {
  type: 'SET_ACTIVE';
  payload: string;
};
