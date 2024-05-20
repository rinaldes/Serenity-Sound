"use client";

import { motion } from "framer-motion";
import {
  pageProps,
  socialProps,
  iconPageMap,
  iconSocialMap,
} from "./interface";

export const PageIcon = ({ icon, isActive }: pageProps) => {
  const weight = isActive ? "fill" : "regular";
  const IconComponent = iconPageMap[icon];
  return (
    <motion.div whileHover={{ scale: 1.6 }}>
      <IconComponent
        weight={weight}
        alt={`${icon} icon for ${icon} of Serenity Sound Website`}
        className="w-fit h-fit p-2 rounded-xl hover:bg-lavender hover:text-white"
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
      <IconComponent
        alt={alt}
        className="w-fit h-fit p-2 rounded-xl hover:bg-lavender hover:text-white"
      />
    </motion.div>
  );
};
