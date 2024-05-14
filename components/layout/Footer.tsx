import { SocialIcon } from "@/assets/Icons";
import { siteConfig } from "@/config/site";
import { Text } from "@/components/typography";
import Link from "next/link";

const link = siteConfig.socialLinks.map(({ href, icon }) => (
  <Link key={href} href={href} target="_blank">
    <SocialIcon
      name={icon as "Email" | "Linkedin" | "Instagram" | "Twitter" | "Github"}
    />
  </Link>
));

const Footer = () => (
  <footer className="absolute bottom-0 left-0  w-full flex flex-row justify-between mb-4 pr-16 pl-36 text-gray-600">
    <Text
      type="p"
      text="Copyright © 2024 Serenity Company. All rights reserved."
    />
    <div className="flex gap-12">{link}</div>
  </footer>
);

export default Footer;
