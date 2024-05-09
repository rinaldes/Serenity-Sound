import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import Logo from "@/assets/Logo";
import { siteConfig } from "@/config/site";

const link = siteConfig.navItems.map(({ href, label }) => (
  <NavbarItem key={label}>
    <Link color="foreground" href={href}>
      {label}
    </Link>
  </NavbarItem>
));

const Nav = () => (
  <Navbar className="px-4 py-4">
    <NavbarBrand>
      <Logo />
    </NavbarBrand>
    <NavbarContent className="font-body hidden sm:flex gap-12" justify="center">
      {link}
    </NavbarContent>
  </Navbar>
);

export default Nav;
