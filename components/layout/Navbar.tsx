"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import Logo from "@/assets/Logo";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

const link = siteConfig.navItems.map(({ href, label }) => (
  <NavbarItem key={label}>
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      transition={{ duration: 0.25 }}
      className="px-4 pt-2 pb-3 rounded-xl hover:bg-lavender hover:text-white"
    >
      <Link color="foreground" href={href} scroll={false}>
        {label}
      </Link>
    </motion.div>
  </NavbarItem>
));

const Nav = () => (
  <Navbar className="md:py-4 bg-white-lavender" maxWidth="full">
    <NavbarBrand className="flex flex-col item-center md:items-start">
      <Logo />
    </NavbarBrand>
    <NavbarContent className="font-body hidden md:flex gap-6" justify="end">
      {link}
    </NavbarContent>
  </Navbar>
);

export default Nav;
