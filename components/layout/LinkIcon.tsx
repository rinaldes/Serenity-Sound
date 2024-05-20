import { PageIcon, SocialIcon } from "@/assets/Icons";
import { pageProps } from "@/assets/Icons/interface";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });
};

export const SocialAside = () => (
  <>
    {siteConfig.socialLinks.map(({ href, icon }) => (
      <Link key={href} href={href} target="_blank">
        <SocialIcon
          name={
            icon as "Email" | "Linkedin" | "Instagram" | "Twitter" | "Github"
          }
        />
      </Link>
    ))}
  </>
);
export const PageAside = ({ path }: { path: any }) => (
  <>
    {path.map(({ href, icon }: { href: string; icon: pageProps["icon"] }) => (
      <Link key={href} href={href} onClick={handleScroll}>
        <PageIcon isActive={false} icon={icon as pageProps["icon"]} />
      </Link>
    ))}
  </>
);
