import { SocialIcon } from "@/assets/Icons";
import { Text } from "components/typography";
import Link from "next/link";

const footerLink: {
  href: string;
  icon: "Github" | "Twitter" | "Instagram" | "Linkedin" | "Email";
}[] = [
  { href: "mailto:rinaldes.duma@hotmail.com", icon: "Email" },
  { href: "https://www.linkedin.com/in/rinaldes", icon: "Linkedin" },
  { href: "https://www.instagram.com/rinaldes.d", icon: "Instagram" },
  { href: "https://x.com/RinaldesD", icon: "Twitter" },
  { href: "https://github.com/rinaldes", icon: "Github" },
];

const link = footerLink.map(({ href, icon }) => (
  <Link key={href} href={href} target="_blank">
    <SocialIcon name={icon} />
  </Link>
));

const Footer = () => (
  <footer className="flex flex-row justify-between mt-4 px-4 text-gray-600">
    <Text type="p" text="Copyright © 2024. All rights reserved." />
    <div className="flex gap-12">{link}</div>
  </footer>
);

export default Footer;
