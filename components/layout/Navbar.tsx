import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import Logo from "@/assets/Logo";

const Nav = () => (
  <Navbar className="px-4 py-4">
    <NavbarBrand>
      <Logo />
    </NavbarBrand>
    <NavbarContent className="font-body hidden sm:flex gap-12" justify="center">
      <NavbarItem>
        <Link color="foreground" href="#">
          Home
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link color="foreground" href="#">
          About Us
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Our Services
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Our Teams
        </Link>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
);

export default Nav;
