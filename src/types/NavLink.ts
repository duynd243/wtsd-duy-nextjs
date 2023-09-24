type BaseNavLink = {
  href?: string;
  label: string;
};

type NavLink = BaseNavLink & {
  subItems?: BaseNavLink[];
};

export default NavLink;
