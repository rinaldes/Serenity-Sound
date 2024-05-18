"use client";

import { motion } from "framer-motion";
import {
  pageProps,
  socialProps,
  iconPageMap,
  iconSocialMap,
} from "./interface";

export const PageIcon = ({ name, isActive }: pageProps) => {
  const weight = isActive ? "fill" : "regular";
  const IconComponent = iconPageMap[name];
  return (
    <motion.div whileHover={{ scale: 1.6 }}>
      <IconComponent
        weight={weight}
        alt={`${name} icon for ${name} of Serenity Sound Website`}
      />
    </motion.div>
  );
};

export const SocialIcon = ({ name }: socialProps) => {
  const alt =
    name === "Email"
      ? `${name} icon for Contacting Serenity Sound`
      : `${name} icon for Serenity Sound's ${name} profile`;
  const IconComponent = iconSocialMap[name];
  return (
    <motion.div whileHover={{ scale: 1.6 }}>
      <IconComponent alt={alt} />
    </motion.div>
  );
};
