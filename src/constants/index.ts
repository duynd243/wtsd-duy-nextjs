import NavLink from "@/types/NavLink";

export const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Package",
    subItems: [
      {
        label: "Package 1",
        href: "/package-1",
      },
      {
        label: "Package 2",
        href: "/package-2",
      },
    ],
  },
  {
    label: "Destination",
    subItems: [
      {
        label: "Destination 1",
        href: "/destination-1",
      },
      {
        label: "Destination 2",
        href: "/destination-2",
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
  },
];
