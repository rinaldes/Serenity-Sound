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
import { Button } from "..";
import { useContext } from "react";
import { ModalContext } from "@/contexts/Modal";
import { List } from "@phosphor-icons/react/dist/ssr";

const link = siteConfig.navItems.map(({ href, label }) => (
  <NavbarItem key={label}>
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      transition={{ duration: 0.25 }}
      className="px-4 pt-2 pb-3 rounded-xl hover:bg-lavender hover:text-white"
    >
      <Link color="foreground" href={href}>
        {label}
      </Link>
    </motion.div>
  </NavbarItem>
));

const Nav = () => {
  const { onOpen } = useContext(ModalContext);

  return (
    <Navbar className="md:pt-2 bg-white-lavender" maxWidth="full">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className="hidden lg:flex gap-6" justify="end">
        {link}
      </NavbarContent>
      <NavbarContent className="flex lg:hidden" justify="end">
        <Link color="foreground" href="#" onClick={() => onOpen()}>
          <List size={24} />
        </Link>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
